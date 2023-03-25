a = int(input())
l = []
k = False
for i in range(a):
    b = int(input())
    l.append(b)
for i in range(1, a):
    if ((l[i] < 0 and l[i - 1] < 0) or (l[i] > 0 and l[i - 1] > 0)):
        k = True
if (k):
    print("Yes")
else:
    print("No")
