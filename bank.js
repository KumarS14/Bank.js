let readline = require('readline-sync')
class Bank {
    constructor(){
       this.date = ['10/01/2023','34/45/2045']
       this.current = [1000,200]
       this.amount = [1000,300]
    }
    balance()
    {
        let output = '\t date || credit || debit ||  balance\n';
        for (let i = 0; i < this.date.length; i++) {
         output += `          \t  ${this.date[ i]}   \t|| ${this.amount[i]}   || ${this.current[i]}\n`;
       
        }
        return output
    }


    
    deposit()
    {
       this.date.push(readline.question('enter date of your deposit'))

        

    }
}
module.exports = Bank;