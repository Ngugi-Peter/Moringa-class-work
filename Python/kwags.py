def my_kwags (**kwags):
    print("kwags is ",type(kwags))
    print(kwags)

    my_kwags(a=23,b=30)
    my_kwags(name="Andrew",email="Andi@gmail",dict={"a":"b"})

    def area_rectangle (length,width):
        area=length*width
        print(f"For rectangle with {length}and {width}area is {area}")
#option one yo call it directly with args
    area_rectangle(5,3)# args
    width=4
    length=6

    area_rectangle(width,length) #args
    area_rectangle(width=width,length=length)#kwags
    #option 3with kwags
    area_rectangle(width+4,length=6)
    #you have to match parameters name with arguments

 
