
const bank = require("./bank");

describe('bank',() => {
    it('tests to see if module is returned',() =>
    {
        bank1 = new bank()
        expect(bank1).toBe['Function Bank']
    });
    it('tests to see if balance returns zero',() =>
    {
       const bank1 = new bank()
        expect(bank1.balance()).toEqual(`date||credit || debit || balance
         10/01/2023     || 1000  || 1000`)
    });
});