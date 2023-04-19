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
         output +=`     ||${this.date[ i]}    ||${this.depositOrWithdraw[i]}  || ${this.current[i]}\n`;
       
        }  
         return output
    }
    
  transaction(the_date,the_deposit_orWithdraw,the_question)
    {
    while (true) {
   this.date.push(the_date)
   this.depositOrWithdraw.push(the_deposit_orWithdraw)
   
   this.question = (the_question) 
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