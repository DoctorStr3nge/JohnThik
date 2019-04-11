const easterDay = require('@jsbits/easter-day')

const addDays = (date, days) => {
	var result = new Date(date)
	result.setDate(result.getDate() + days)

	return result
}

const setMonth = (date, month, day) => {
	var result = new Date(date)
	result.setMonth(month, day)

	return result
}

const formatDate = (date) => {
	return date.getFullYear(date)+'-'+('0'+(date.getMonth()+1)).slice(-2)+'-'+('0'+date.getDate()).slice(-2)
}

/**
 * Get all Danish holiday in the given year.
 */
const getHolidays = (year) => {
	const easter = easterDay(year)

	const holidays = {}

	const obj = {
		'nytårsdag': setMonth(easter, 0, 1),
		'palmesøndag': addDays(easter, -7),
		'skærtorsdag': addDays(easter, -3),
		'langfredag': addDays(easter, -2),
		'påskedag': easter,
		'2. påskedag': addDays(easter, 1),
		'store bededag': addDays(easter, 26),
		'kristi himmelfartsdag': addDays(easter, 39),
		'pinsedag': addDays(easter, 49),
		'2. pinsedag': addDays(easter, 50),
		'juledag': setMonth(easter, 11, 25),
		'2. juledag': setMonth(easter, 11, 26),
	}

	for (const [key, value] of Object.entries(obj)) {
		holidays[formatDate(value)] = key
	}

	return holidays
}

/**
 * Decide if the given day is a holiday.
 */
const isHoliday = (date) => {
	const year = date.getUTCFullYear()
	const holidays = getHolidays(year)

	return formatDate(date) in holidays
}

/**
 * Decide if the given day is a holiday.
 */
const getHolidayName = (date) => {
	const year = date.getUTCFullYear()
	const holidays = getHolidays(year)
	const key = formatDate(date)

	return key in holidays ? holidays[key] : null
}

exports.getHolidays = getHolidays
exports.isHoliday = isHoliday
exports.getHolidayName = getHolidayName
