let readline = require('readline-sync')
class Bank {
    constructor(){
       this.date = []
       this.current = []
       this.depositOrWithdraw = []
      
       
      
    }
    balance()
    {
      let output = '     ||date || credit|| debit ||  balance\n';
      for (let i = 0; i < this.date.length; i++) {
       output +=`   ||${this.date[ i]}    ||${this.depositOrWithdraw[i]}  || ${this.current[i]}\n`;
       
        }  
         return output.trim()
    }
    
  transaction(the_date,the_deposit_orWithdraw,the_question)
    {
   // while (true) {
   this.date.push(the_date)
   this.depositOrWithdraw.push(the_deposit_orWithdraw)
   
   //if (this.question == 'exit')
 
    //}
   // for (let i = 0; i < this.date.length; i++) {
     //   this.current.push(this.depositOrWithdraw[0] + this.depositOrWithdraw[1])
    //}
    let balance = 0;
    for (let i = 0; i < this.depositOrWithdraw.length; i++) {balance += parseInt(this.depositOrWithdraw[i]);
 
  

    }
    this.current.push(balance);
   
  }

  

};



module.exports = Bank;