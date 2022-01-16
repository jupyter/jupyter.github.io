import k3d
import numpy as np

lines = np.load('vertices.npy')
lines_attributes = np.load('attributes.npy')

plot = k3d.plot()

for l, a in zip(lines, lines_attributes):
    plot += k3d.line(l, attribute=a, width=0.0001,
                     color_map=k3d.matplotlib_color_maps.Inferno, color_range=[0,0.5], shader='mesh',
                     compression_level=9)
plot.display()
