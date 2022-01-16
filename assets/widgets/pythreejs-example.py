from pythreejs import *

f = """
function f(origu,origv) {
    // scale u and v to the ranges I want: [0, 2*pi]
    var u = 2*Math.PI*origu;
    var v = 2*Math.PI*origv;

    var x = Math.sin(u);
    var y = Math.cos(v);
    var z = Math.cos(u+v);

    return new THREE.Vector3(x,y,z);
}
"""

surf_g = ParametricGeometry(func=f, slices=16, stacks=16)
surf = Mesh(geometry=surf_g, material=MeshLambertMaterial(color='green', side='FrontSide'))
surf2 = Mesh(geometry=surf_g, material=MeshLambertMaterial(color='yellow', side='BackSide'))
c = PerspectiveCamera(position=[5, 5, 3], up=[0, 0, 1],
                      children=[DirectionalLight(color='white',
                                                 position=[3, 5, 1],
                                                 intensity=0.6)])
scene = Scene(children=[surf, surf2, c, AmbientLight(intensity=0.5)])
Renderer(camera=c, scene=scene, controls=[OrbitControls(controlling=c)], width=400, height=400)
