import { WeekDayNameType, WeekDayNameTypeKey } from '../types/weekDayNameType';

export function getMonthName(m: number) {
  const date = new Date();
  date.setMonth(m - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}

export function getYearFromString(date?: string) {
  if (!date) return -1;
  return new Date(date).getFullYear();
}

export function getMonthFromString(date?: string) {
  if (!date) return -1;
  return new Date(date).getMonth() + 1;
}

export function getDayFromString(date?: string) {
  if (!date) return -1;
  return new Date(date).getDate();
}

export function getDayStringFromString(date?: string) {
  if (!date) return '';
  return getDayFromString(date).toString();
}

export function parseStringToFullDateStringDash(date?: string) {
  if (!date) return '';

  const dateObj = new Date(date);
  const y = dateObj.getFullYear(); // 년도
  const m = (dateObj.getMonth() + 1).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  }); // 월
  const d = dateObj
    .getDate()
    .toLocaleString(undefined, { minimumIntegerDigits: 2 }); // 날짜

  return `${y}-${m}-${d}`;
}

export function getTodayFullDateString() {
  const today = new Date();
  return parseStringToFullDateStringDash(today.toLocaleDateString());
}

export function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const daysInMonth = [];

  while (date.getDay() !== 1) {
    date.setDate(date.getDate() - 1);
  }

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(date).toLocaleDateString();
      week.push(parseStringToFullDateStringDash(day));
      date.setDate(date.getDate() + 1);
    }
    daysInMonth.push(week);
  }

  return daysInMonth;
}

export function stringToWeekdayList(dateStr?: string): WeekDayNameType[] {
  if (!dateStr) return [];
  const repeatDate = dateStr.split(',');
  return (
    repeatDate.filter((date) => date in WeekDayNameTypeKey) as WeekDayNameType[]
  ).map((day) => {
    switch (day) {
      case 'SUN':
        return WeekDayNameTypeKey.SUN;
      case 'MON':
        return WeekDayNameTypeKey.MON;
      case 'TUE':
        return WeekDayNameTypeKey.TUE;
      case 'WED':
        return WeekDayNameTypeKey.WED;
      case 'THU':
        return WeekDayNameTypeKey.THU;
      case 'FRI':
        return WeekDayNameTypeKey.FRI;
      case 'SAT':
        return WeekDayNameTypeKey.SAT;
    }
  });
}
