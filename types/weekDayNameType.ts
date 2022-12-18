export enum WeekDayNameTypeEnum {
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
}

export enum WeekDayNameTypeKey {
  'SUN' = 'SUN',
  'MON' = 'MON',
  'TUE' = 'TUE',
  'WED' = 'WED',
  'THU' = 'THU',
  'FRI' = 'FRI',
  'SAT' = 'SAT',
}

export type WeekDayNameType = keyof typeof WeekDayNameTypeEnum;
