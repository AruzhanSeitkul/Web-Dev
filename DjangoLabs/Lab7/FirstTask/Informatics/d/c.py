a=int(input())
l=[]
for i in range(a):
    b=int(input())
    l.append(b)
c=0
for i in l:
    if(i>0):
        c+=1
print(c)