"""
Abstraction
Bank class
deposits, withdraws
show accounts
getter and setter

"""
class BankAccount:
    clients=0 #static
    bank_name="Post bank" #static property
    def __init__(self, name, balance, account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no
#data i can read
    @property
    def balance(self):
        print("somebody tried to read  Johns balance")
        return self._balance

#to control updates
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Balance must be a number")
            return
        if value < 0:
            print("Balance cannot be negative")
            return
        self._balance = value
    def get_balance(self):
        pass

    def deposit(self):
        pass
    def withdraw(self):
        pass
    def show_account(self):
        print(f"Account Holder: {self.name}")
        print(f"Account Number: {self.account_no}")
        print(f"Account Balance: {self.balance}")

@staticmethod
def calculate_interest(amount, year):
    rate =10
    interest_per_year=amount*(rate/100)
    total_interest=interest_per_year*year
    print(f"Total interest for {year} years is {total_interest}")
    print(f"if you take a loan of {amount} for {year} years, you will pay {total_interest} as interest")

@classmethod
def get_clients(cls):
    cls.clients=cls.clients+1            


martin = BankAccount(name="Martin", balance=1000, account_no=123456)    
martin.show_account()
print("Bank name",BankAccount.bank_name)
print(martin.account_no)#martin
print("client",BankAccount.clients) #Class property
BankAccount.calculate_interest(1000, 5)