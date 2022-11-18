const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

const isToday = (someDate: Date | undefined) => {
  const today = new Date()
  return someDate?.getDate() === today.getDate() &&
    someDate?.getMonth() === today.getMonth() &&
    someDate?.getFullYear() === today.getFullYear()
}

const isYesterday = (someDate: Date) => {
  const today = new Date()
  return someDate.getDate() === today.getDate() - 1 &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
}

const isSameDay = (date1: Date | undefined, date2: Date | undefined) => {
  if (!date1 || !date2) return false;
  return date1?.getDate() === date2?.getDate() &&
    date1?.getMonth() === date2?.getMonth() &&
    date1?.getFullYear() === date2?.getFullYear()
}

const isLastWeek = (someDate: Date) => {
  const diffYears = new Date().getFullYear() - someDate.getFullYear();
  const diffDays = new Date().getDate() - someDate.getDate();
  return diffYears === 0 && (diffDays > 1 && diffDays < 7);
}

const getWeekday = (someDate: Date) => {
  return weekdays[someDate.getDay()];
}

function dateToYMD(date: Date, showTimeOnly: boolean) {
  const d = date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();

  const h = date.getHours();
  const mi = date.getMinutes();

  // Check if it's today
  if (d === (new Date()).getDate()) return (showTimeOnly ? '' : 'Today, ') + (h <= 9 ? '0' + h : h) + ':' + mi;

  // Check if it's yesterday
  if (isYesterday(date)) return 'Yesterday, ' + (h <= 9 ? '0' + h : h) + ':' + mi;

  // Check if it's this week
  if (isLastWeek(date)) return getWeekday(date) + ', ' + (h <= 9 ? '0' + h : h) + ':' + mi;

  return '' + d + ' ' + m + ' ' + y + ', ' + (h <= 9 ? '0' + h : h) + ':' + mi;
}

function shortenedDateToYMD(date: Date) {
  const d = date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();

  const h = date.getHours();
  const mi = date.getMinutes();

  // Check if it's today
  if (d === (new Date()).getDate()) return (h <= 9 ? '0' + h : h) + ':' + mi;

  // Check if it's this week
  if (isLastWeek(date)) return getWeekday(date) + ', ' + (h <= 9 ? '0' + h : h) + ':' + mi;

  return '' + d + ' ' + m + ' ' + y;
}

export { isToday, isYesterday, isSameDay, isLastWeek, getWeekday, dateToYMD, shortenedDateToYMD };