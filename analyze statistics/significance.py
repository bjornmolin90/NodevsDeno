#!/usr/bin/env python
# coding: utf-8

import numpy as np
from scipy.stats import mannwhitneyu
import sys
from IPython.display import display

node_file = sys.argv[1]
deno_file = sys.argv[2]

node_array = np.loadtxt(node_file, delimiter=',')
deno_array = np.loadtxt(deno_file, delimiter=',')

runs = ['landing', 'small', 'medium', 'big', 'bcrypt']
node_data = {}
deno_data = {}
for i, run in enumerate(runs):
    node_data[run] = [node_array[val] for val in range(len(node_array)) if val % 5 == i]
    deno_data[run] = [deno_array[val] for val in range(len(deno_array)) if val % 5 == i]

for run in runs:
    u1, p = mannwhitneyu(node_data[run], deno_data[run], method="exact")
    print(f'{run}:')
    print(u1, round(p, 5))
    print()
