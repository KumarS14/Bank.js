class Bank {
    constructor(){
       this.date = []
       this.current = [1000]
       this.amount = [1000]
    }
    balance()
    {
      return`date||credit || debit || balance\n         ${this.date}     || ${this.amount}  || ${this.current}`
    }
    deposit()
    {
        console.log('enter date followed by amount you want to deposit ')
    }
}
module.exports = Bank;