let readline = require('readline-sync')
class Bank {
    constructor(){
       this.date = []
       this.current = []
       this.depositOrWithdraw = []
       this.bool = true
       this.question = ""
    }
    balance()
    {
        
        let output = '\t date || credit || debit ||  balance\n';
        for (let i = 0; i < this.date.length; i++) {
         output += `          \t  ${this.date[ i]}   \t|| ${this.depositOrWithdraw[i]}   || ${this.newBalance[i]}\n`;
       
        }
        return output
    }


    
    deposit()
    {
        while (true) {
       this.date.push(readline.question('enter date of your deposit : '))
       this.depositOrWithdraw.push(readline.question('enter the amount you want to deposit in : '))
       this.current.push(this.depositOrWithdraw)
     
     
       this.question = (readline.question('would you like to create another transaction or if you are done please type end : ')) 
       if (this.question == 'exit'){ break}
       
    }     
        

    }
}
module.exports = Bank;