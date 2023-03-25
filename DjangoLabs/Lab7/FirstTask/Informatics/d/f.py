l = []
c = 0
a = int(input())
for i in range(a):
    l.append(int(input()))
for i in range(1, a - 1):
    if (l[i] > l[i - 1] and l[i] > l[i + 1]):
        c += 1
print(c)
