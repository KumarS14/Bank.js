
const Bank = require("./bank");
describe("Bank", () => {

  it('tests to see if file can be called',() => {
    bank1 = new Bank()
    expect(bank1.balance()).toBe ( '     ||date || credit|| debit ||  balance\n')

  });
  it('tests to see if file can return one transaction',() => {
    bank1 = new Bank()
    bank1.transaction('13/04/2005','+1000','exit')
    expect(bank1.balance()).toEqual(expect.stringContaining('||12/03/2004    ||+1000  || 1000'));

  });
  it('tests to see if file can return two transaction',() => {
    bank1 = new Bank()
    
      bank1.transaction('13/04/2005','+1000','no')
      bank1.transaction('14/05/2006','-50','exit')
    
    

    expect(bank1.balance()).toEqual("dfdf")
  });
 
})  

