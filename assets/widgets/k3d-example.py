import k3d
import numpy as np
import SimpleITK as sitk

# K3D takes the array, not the file - any reader that yields NumPy will do
img = sitk.GetArrayFromImage(sitk.ReadImage('heart.mhd'))

plot = k3d.plot()
plot += k3d.volume(img[::4, ::4, ::4].astype(np.float16))
plot.display()
