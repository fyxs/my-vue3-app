import dayjs, { Dayjs } from 'dayjs'

export enum DateFormatModel {
  dateTime = 'YYYY-MM-DD HH:mm:ss',
  dateTimeHM = 'YYYY-MM-DD HH:mm',
  date = 'YYYY-MM-DD',
  dateNoline = 'YYYYMMDD',
  time = 'HH:mm:ss',
  timeHM = 'HH:mm'
}

export function _DayJs(date: Date | string) {
  if (!date) {
    return null
  }
  return dayjs(date)
}

/**
 * 日期转换为规范的字符串
 * @param date 日期时间
 * @param formatType 转换类型(YYYY-MM-DD HH:mm:ss)
 * @returns
 */
export function dateFormat(date: Date | Dayjs | null | number, formatType: DateFormatModel = DateFormatModel.dateTime) {
  return dayjs(date).format(formatType)
}

/**
 * 获取一个月最开始的日期
 * @param date 日期时间
 * @returns
 */
export function getMonthStart(date: Date | Dayjs) {
  return dayjs(date).startOf('month')
}

/**
 * 获取一个月最后的日期
 * @param date 日期时间
 * @returns
 */
export function getMonthEnd(date: Date | Dayjs) {
  return dayjs(date).endOf('month')
}

/**
 * 将数字转为01的形式
 * @param str
 * @returns
 */
export function toTen(str: string | number) {
  if (typeof str === 'string') {
    str = Number(str)
  }
  if (isNaN(str)) {
    return
  }
  return str < 10 ? `0${str}` : str
}

/**
 * 将s化为00:00的格式
 * @param s 秒数
 */
export function getMS(s: number | undefined) {
  if (!s) {
    return '00:00'
  }
  const m = Math.floor(s / 60)
  const S = s % 60
  return `${toTen(m)}:${toTen(Math.round(S))}`
}

/**
 * 将s化为00:00:00的格式
 * @param s 秒数
 */
export function getHMS(s: number | undefined) {
  if (!s) {
    return '00:00:00'
  }
  const H = Math.floor(s / 3600)
  const m = Math.floor((s - Number(H) * 60) / 60)
  const S = s % 60
  return `${toTen(H)}:${toTen(m)}:${toTen(Math.round(S))}`
}
