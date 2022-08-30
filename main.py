import numpy as np
import random

from utils import add_class

output_el = Element('output').element
console.log(output_el)

arr = np.array([73, 13, 22, 10, 45])

# print(arr)

# pyscript.write('output', f"{arr}")
output_el.innerHTML = f"{arr}"


def shuffle_array(*args):
  # shuffling
  shuffled = sorted(arr, key = lambda k: random.random())

  # changing color
  add_class(output_el, 'text-green-500')

  # pyscript.write('output', shuffled)
  output_el.innerHTML = shuffled