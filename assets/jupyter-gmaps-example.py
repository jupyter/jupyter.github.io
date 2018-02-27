import gmaps
import gmaps.datasets
gmaps.configure(api_key="AI...")  # Your Google API key

locations = gmaps.datasets.load_dataset("taxi_rides")

fig = gmaps.figure()
fig.add_layer(gmaps.heatmap_layer(locations))

fig
