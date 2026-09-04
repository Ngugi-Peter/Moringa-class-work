""" 

"""
def my_deco(func):
    def wrapper():
        print("Before the function is called.")
        func()
        print("After the function is called.")
    return wrapper
def hello():
    print("Hello, world!")
    print ("This is a simple function.")

@my_deco
def french_hello():
    print("Bonjour, le monde!")
    print ("Ceci est une fonction simple.")

french_hello()
        