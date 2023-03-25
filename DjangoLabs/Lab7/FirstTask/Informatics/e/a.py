def show_min(l):
    print(l[0])


l = []
c = 0
a = int(input())
for i in range(a):
    l.append(int(input()))
l.sort()
show_min(l)
