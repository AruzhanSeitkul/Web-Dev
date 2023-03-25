from math import sqrt

a = int(input())
i = 1
while (i <= a):
    if (sqrt(i) == int(sqrt(i))):
        print(i)
    i += 1
