
const Bank = require("./bank");
describe("Bank", () => {

  it('tests to see if file can be called',() => {
    bank1 = new Bank()
    expect(bank1.balance()).toBe ( '     ||date || credit|| debit ||  balance\n')

  })
  it('tests to see if file can be called',() => {
    bank1 = new Bank()
    bank1.transaction('12/03/2004','+1000','exit')
    expect(bank1.balance()).toBe['||date || credit|| debit ||  balance'
    ,'||12/03/2004    ||+1000  || 1000']

  })
})  

