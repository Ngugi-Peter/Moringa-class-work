age=20
if age>18:
    print("you can drive")
    print("Your an Adult")
    if age==23:
        print ("Thats aawesome")
elif age== 44:
    print ("you can retire")
else:
    print("final else")

k=0
while k<30:
    k=k+1
    print("K is ",k)


for i in range(0,5,1):
    print("I is ", i)

ar=[23,"hello",67,45,40]
for i in range (0, len(ar)):
    single_item=ar[1]
    print(single_item)  
    for single_item in ar:
        print("Single Item",single_item)   


