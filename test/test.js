const expect = require('chai').expect
const danishHolidays = require('../index')

describe('getHolidays(2019)', () => {
    const holidays = danishHolidays.getHolidays(2019)

    it('count holidays', () => {
        expect(Object.keys(holidays).length).to.be.equal(12)
    })

    it('holidays', () => {
        expect(holidays).to.have.all.keys([
            '2019-01-01',
            '2019-04-14',
            '2019-04-18',
            '2019-04-19',
            '2019-04-21',
            '2019-04-22',
            '2019-05-17',
            '2019-05-30',
            '2019-06-09',
            '2019-06-10',
            '2019-12-25',
            '2019-12-26',
        ])
    })
})
