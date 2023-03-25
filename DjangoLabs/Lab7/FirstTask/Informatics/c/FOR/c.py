from math import sqrt

a = int(input())
b = int(input())
for i in range(a, b):
    if (sqrt(i) == int(sqrt(i))):
        print(i)
