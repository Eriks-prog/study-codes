class BankAccount {
    constructor ( accountNumber, accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
         console.log(`You are very welcome: $${accountHolder}!`); 
         console.log(`A/c No.: ${accountNumber}`);
         console.log(`Opening Balance: $${balance}`); 
    }



    deposit(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited. Current balance: $${this.balance}`);
    }
   
    withdraw(amount){
        if(amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`)
        }
        else 
    {
      console.log(`Want to withdrawn: $${amount}`);
      console.log('Insufficient balance');
    }
    
    
   
checkBalance()    
{
        console.log(`Current Account Balance: $${this.balance}`)
    }
 }

}

export default BankAccount;