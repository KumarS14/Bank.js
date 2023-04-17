class Bank {
    constructor(){
       this.date = ['10/01/2023']
       this.current = [1000]
       this.amount = [1000]
    }
    balance()
    {
      return`date||credit || debit || balance\n         ${this.date}     || ${this.amount}  || ${this.current}`
    }
    deposit(insert)
    {
        
    }
}
module.exports = Bank;