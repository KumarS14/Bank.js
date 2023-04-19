
const Bank = require("./bank");
describe("Bank", () => {

  it('tests to see if file can be called',() => {
    bank1 = new Bank()
    expect(bank1.balance()).toBe( '||date || credit|| debit ||  balance')

  });
  it('tests to see if file can return one transaction',() => {
    const bank1 = new Bank();
    bank1.transaction('13/04/2005','+1000','no');
    const expected = [
      "||date || credit|| debit ||  balance",
      "   ||13/04/2005    ||+1000  || 1000",
     
    ];
    expect(bank1.balance().split('\n')).toEqual(expected);
  

  });
  it('tests to see if file can return two transaction',() => {
  
      const bank1 = new Bank();
      bank1.transaction('13/04/2005','+1000','no');
      bank1.transaction('14/05/2006','-50','exit');
      const expected = [
        "||date || credit|| debit ||  balance",
        "   ||13/04/2005    ||+1000  || 1000",
        "   ||14/05/2006    ||-50  || 950",
      ];
      expect(bank1.balance().split('\n')).toEqual(expected);
    
    
    
  });
    
    



   
  
 

  });
 


