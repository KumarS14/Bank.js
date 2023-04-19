
const Bank = require("./bank");

describe("Bank", () => {
  it('tests to see if module is called',() => {
    bank1 = new Bank()
    expect(bank1.balance()).toBe ( '     ||date || credit|| debit ||  balance\n')

  })
})  

