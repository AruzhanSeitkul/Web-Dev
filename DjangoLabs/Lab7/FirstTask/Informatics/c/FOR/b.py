a = int(input())
b = int(input())
c = int(input())
d = int(input())
s = ""
for i in range(a, b):
    if (i % d == c):
        s += str(i) + " "
print(s)