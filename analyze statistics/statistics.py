#!/usr/bin/env python
# coding: utf-8

import numpy as np
import pandas as pd
from IPython.display import display
import sys

file = sys.argv[1]
array = np.loadtxt(file, delimiter=',')

runs = ['landing', 'small', 'medium', 'big', 'bcrypt']
data = {}
for i, run in enumerate(runs):
    data[run] = [array[val] for val in range(len(array)) if val % 5 == i]

display(pd.DataFrame.from_dict(data).describe())



