a = input()
c = 0
b = len(a) - 1
for i in range(len(a)):
    c += int(a[i]) * (2 ** b)
    b -= 1
print(c)
