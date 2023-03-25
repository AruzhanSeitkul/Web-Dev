a = int(input())
i = 0
d = 0
l = []
while (i < 10):
    l.append(2 ** i)
    i+=1
if (a in l):
    print("Yes")
else:
    print("No")
