let readline = require('readline-sync')
class Bank {
    constructor(){
       this.date = []
       this.current = []
       this.depositOrWithdraw = []
       this.question = ""
       
      
    }
    balance()
    {
        
           let output = '     ||date || credit|| debit ||  balance\n';
        for (let i = 0; i < this.date.length; i++) {
         output +=`   ||${this.date[ i]}    ||${this.depositOrWithdraw[i]}  || ${this.current[i]}\n`;
       
        }  
         return output
    }
    
  transaction()
    {
    while (true) {
   this.date.push(readline.question('enter date of your deposit : '))
   this.depositOrWithdraw.push(readline.question('enter the amount you want to deposit in : '))
   
   this.question = (readline.question('would you like to create another transaction or if you are done please type end : ')) 
   if (this.question == 'exit'){ break}
 
    }
   // for (let i = 0; i < this.date.length; i++) {
     //   this.current.push(this.depositOrWithdraw[0] + this.depositOrWithdraw[1])
    //}
    let balance = 0;
    for (let i = 0; i < this.depositOrWithdraw.length; i++) {balance += parseInt(this.depositOrWithdraw[i]);
 
  this.current.push(balance);

    }
    return this.balance()
  }

  

};



module.exports = Bank;