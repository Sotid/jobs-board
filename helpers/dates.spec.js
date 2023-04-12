const getDateDif = require('./dates')

describe('getDateDif', () => {

    it('should return the correct difference if the target date is in the past', () => {
        const date = new Date() 
        const targetDate = date.setHours(date.getHours() - 24) 
        const diff = getDateDif(targetDate)
        expect(diff).toEqual({ minutes: 1440, hours: 24, days: 1, weeks: 0 })
    })
    it('should return error if the target date is in the future', () => {
        const date = new Date() 
        const targetDate = date.setHours(date.getHours() + 25) 
        expect(()=> getDateDif(targetDate)).toThrowError('The date must be in the past')
    })
})