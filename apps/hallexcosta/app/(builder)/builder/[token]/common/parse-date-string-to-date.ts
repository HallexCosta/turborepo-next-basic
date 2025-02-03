import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

/**
 * Parse date in format D [de] MMMM [de] YYYY
 * @param dateString
 */
export function parseDate(dateString: string) {
  const date = dayjs(dateString, 'D [de] MMMM [de] YYYY', 'pt-br').toDate()
  if (!isNaN(Number(date))) return date

  return null
}

export function parseDateToDatetime(date: string) {
  date = `${date} 00:00:00`
  return new Date(date)
}