const {getDateDif, getPublishedDateText} = require('./dates')

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

describe('getPublishedDateText', () => {

    it('should return the weeks if it is more than 7 days ', () => {
        const date = new Date() 
        const currentDate = date.getDate();
        const targetDate = date.setDate(currentDate - 14);
        const text = getPublishedDateText(targetDate)
        expect(text).toBe('2 weeks ago')
    })
    it('should return the days if it is more than 1 day ', () => {
        const date = new Date() 
        const currentDate = date.getDate();
        const targetDate = date.setDate(currentDate - 2);
        const text = getPublishedDateText(targetDate)
        expect(text).toBe('2 days ago')
    })
    it('should return the hours if it is less than 24 hours ', () => {
        const date = new Date() 
        const targetDate = date.setHours(date.getHours() - 23) 
        const text = getPublishedDateText(targetDate)
        expect(text).toBe('23 hours ago')
    })
    it('should return the minutes if it is less than 24 hours ', () => {
        const date = new Date() 
        const targetDate = date.setMinutes(date.getMinutes() - 30) 
        const text = getPublishedDateText(targetDate)
        expect(text).toBe('30 minutes ago')
    })
})