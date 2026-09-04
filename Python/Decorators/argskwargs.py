def log_dec(func):
    def wrapper(*args, **kwargs):
        print("_________________________________")
        print("Args:", args)
        print("Kwargs:", kwargs)
        result = func(*args, **kwargs)
        print(f"Function called was {func.__name__}")
        print(f"Result of the function is {result}")
        print("_________________________________")
        return wrapper

    @log_dec
    def hello():
        print("Hello, world!")
        print("This is a simple function.")
        return 123

    @log_dec
    def sum(a, b):
        ans = a + b
        return ans

    sum(a=45, b=23)
    sum(45, 23)

