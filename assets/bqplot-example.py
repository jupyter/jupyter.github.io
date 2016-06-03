import numpy as np
import bqplot.pyplot as plt

size = 100

plt.figure(title='Scatter plot with colors')
plt.scatter(np.random.randn(size), np.random.randn(size), color=np.random.randn(size))
plt.show()
