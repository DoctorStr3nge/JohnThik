const easterDay = require('@jsbits/easter-day')
const moment = require('moment')

/**
 * Get all Danish holiday in the given year.
 */
const getHolidays = (year) => {
  const easter = moment(easterDay(year))

  const holidays = {}

  const obj = {
    'nytårsdag': moment(easter).month(0).date(1),
    'palmesøndag': moment(easter).add(-7, 'days'),
    'skærtorsdag': moment(easter).add(-3, 'days'),
    'langfredag': moment(easter).add(-2, 'days'),
    'påskedag': easter,
    '2. påskedag': moment(easter).add(1, 'day'),
    'store bededag': moment(easter).add(26, 'days'),
    'kristi himmelfartsdag': moment(easter).add(39, 'days'),
    'pinsedag': moment(easter).add(49, 'days'),
    '2. pinsedag': moment(easter).add(50, 'days'),
    'juledag': moment(easter).month(11).date(25),
    '2. juledag': moment(easter).month(11).date(26)
  }

  for (const [key, value] of Object.entries(obj)) {
    holidays[value.format('YYYY-MM-DD')] = key
  }

  return holidays
}

/**
 * Get name of holiday if any.
 */
const getHolidayName = (date) => {
  date = moment(date)
  const year = date.get('year')
  const holidays = getHolidays(year)
  const key = date.format('YYYY-MM-DD')

  return key in holidays ? holidays[key] : null
}

/**
 * Decide if the given day is a holiday.
 */
const isHoliday = (date) => {
  return getHolidayName(date) !== null
}

exports.getHolidays = getHolidays
exports.getHolidayName = getHolidayName
exports.isHoliday = isHoliday
