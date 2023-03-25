a=int(input())
l=[]
for i in range(a):
    b=int(input())
    l.append(b)
for i in range(len(l)):
    if(i%2==0):
        print(l[i])
