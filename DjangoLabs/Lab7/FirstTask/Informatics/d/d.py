N = 0
k = 0
l = []
N = int(input())
a = int(input())
l.append(a)
for i in range(1, N ):
    l.append(int(input()))
    if (l[i] > l[i - 1]):
        k += 1
print(k)
