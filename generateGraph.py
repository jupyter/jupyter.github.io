import json
import requests
import time
import os
import sys

#Change these to fit desired repos and icons
REPOS = [
    ("jupyterlab", "jupyterlab"), 
    ("jupyterhub", "jupyterhub"),
    ("jupyter", "notebook"), 
    ("jupyter", "jupyter_console"), 
    ("jupyter", "jupyter_core"), 
    ("ipython", "ipywidgets"), 
    ("ipython", "ipyparallel"), 
    ("jupyter", "nbconvert"), 
    ("jupyter", "nbformat"), 
    ("jupyter", "nbgrader"),
    ("jupyter", "qtconsole") 
]
REPO_IMG_DIR = "repo_images/"
IMG_TYPE = "png"
CENTER_IMG = "https://jupyter.org/jupyter-circle.png"

#Do not change these
DATA_FILE = "graphData.json"
TIMESTAMP_FILE = "timestamp"
GITHUB_API = "https://api.github.com/"
REFRESH_INTERVAL = 60 * 60 # 1 hour
USE_CUSTOM_IMAGES = True

def get_commits(user, repository, force_refresh=False):
    req = requests.get(GITHUB_API + "repos/" + user + "/" + repository + "/commits")
    commits = json.loads(req.text or req.content)
    return commits

def create_repo_node(repo_name, image_url, count):
    return {"name" : repo_name , "image" : image_url, "group" : count, "type" : "repo"}

def create_contributor_node(contributor, group=1):
    return {"name" : contributor["login"], "image" : contributor["avatar_url"], "group" : group, "type" : "contributor"}

def create_center_node(image=CENTER_IMG):
    return {"name" : "JUPYTER", "image" : image, "group" : 0, "type" : "center"}

def create_graph_repos(repos=REPOS, use_custom_images=USE_CUSTOM_IMAGES, repo_img_dir=REPO_IMG_DIR, img_type=IMG_TYPE):
    graph = {"nodes" : [], "links" : []}
    center_id = 0
    graph["nodes"].append(create_center_node())
    repo_ids = []
    for user, repository in repos:
        commits = get_commits(user, repository)
        url = CENTER_IMG
        if use_custom_images:
            url = repo_img_dir + user + "_" + repository + "." + img_type
        repo_node = create_repo_node(repository, url, len(repo_ids))
        graph["nodes"].append(repo_node)
        repo_id = len(graph["nodes"]) - 1
        graph["links"].append({"source" : repo_id, "target" : center_id, "value" : 1})
        repo_ids.append(repo_id)
        for commit in commits:
            duplicate = False
            author = commit["author"]
            if not author:
                continue
            for index, node in enumerate(graph["nodes"]):
                if node["name"] == author["login"]:
                    duplicate = True
                    contrib_id = index
            if not duplicate:
                node = create_contributor_node(author, group=len(repo_ids)-1)
                graph["nodes"].append(node)
                contrib_id = len(graph["nodes"]) - 1
                graph["links"].append({"source" : repo_id, "target" : contrib_id, "value" : 2})
    graph["links"].append({"source" : repo_ids[0], "target" : repo_ids[-1], "value" : 1})
    return graph

def should_refresh(timestamp_file=TIMESTAMP_FILE, refresh_interval=REFRESH_INTERVAL):
    now = time.time()
    then = 0
    if os.path.isfile(timestamp_file):
        with open(timestamp_file, 'r') as f:
            then = float(f.readline().strip())
    return now - then > refresh_interval

def update_timestamp(timestamp_file=TIMESTAMP_FILE):
    now = time.time()
    with open(timestamp_file, 'w') as f:
        f.write(str(now))

def main(command=[]):
    force_refresh = False
    if len(command) > 0 and command[0] == "force-refresh":
        force_refresh = True
    if force_refresh or should_refresh():
        graph = create_graph_repos()
        if graph is not None and len(graph["nodes"]) > 0:
            with open(DATA_FILE, 'w') as f:
                json.dump(graph, f, indent=1, sort_keys=True)
        else:
            raise ValueError("Empty graph generated")
        update_timestamp()


if __name__ == "__main__":
    main(command=sys.argv[1:])
