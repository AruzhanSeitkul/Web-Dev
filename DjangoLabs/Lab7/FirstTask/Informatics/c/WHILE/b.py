a=int(input())
i=2
l=[]
while(i<a):
    if(a%i==0):
        l.append(i)
    i+=1
print(l[0])
