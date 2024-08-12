import  BankAccount  from "./bankAccount.js"

//create instances of BankAccount to represent different bank accounts

const account1 = new BankAccount("Eriks Sergejs", 12345678, 850);
const account2 = new BankAccount("Vairis M", 1452852, 34);
const account3 = new BankAccount("Serjoza toze", 69855203, 15558);


// Deposit money
account1.deposit(500);
account2.deposit(200);
account3.deposit(2000);


// Withdraw money
account1.withdraw(200);
account2.withdraw(300);
account2.withdraw(2500);


// Check balances
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();