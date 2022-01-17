import ipyvolume.pylab as p3
import numpy as np

fig = p3.figure()
q = p3.quiver(*stream.data[:,0:50,:200], color="red", size=7)
p3.style.use("dark") # looks better
p3.animation_control(q, interval=200)
p3.show()
