a = int(input())
i = 0
d = 0
while (True):
    if (2 ** i < a):
        print(2 ** i)
    i += 1
    if(2**i>a):
        break
