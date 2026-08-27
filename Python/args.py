def my_args(*args):
    print(f"Args type of args{type(args)}")
    print (args)
    print(f"first args{args[0]}")
    print("----------------------")

my_args(39,67,12)
my_args("ray",True,98)

def area_rectangle(length,width):
    area=length*width
    print("--------------------------")
    print(f"For rectangle with length {length}and width {width}")
    print("--------------------------")
area_rectangle(20,13)

def sum(a,b):
    ans=a+b

def sum2(*args):
    ans=0
    for n in args:
        print(f"n is{n}")    
        ans=ans+n
        print (f"Sum is {ans}")
sum2(29,67,3464,)        
