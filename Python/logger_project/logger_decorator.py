import time
from datetime import datetime, date
def logger(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        print(f"start time: {start_time}")
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        diff_in_ms=round(execution_time * 1000, 2)
        today = date.today()
        timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open(f"{today}.txt", "a") as f:
            f.write(f"{timestamp} - Function {func.__name__} executed in {diff_in_ms} ms\n")
            return result
    return wrapper

@logger
def hello():
    print("Hello, world!")

@logger
def big_count():
    for i in range(0,1000000): 
        print(i)
        pass

hello()
big_count()       