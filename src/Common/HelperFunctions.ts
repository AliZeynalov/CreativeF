import { CreatorLatestProductObj, DateTimeString } from "../Types";

export const sortArraysBasedOnDate = (arr: CreatorLatestProductObj[]) => {
  return arr.sort((a, b) => {
    const date1 = new Date(a.latestActivity);
    const date2 = new Date(b.latestActivity);
    return date2.getTime() - date1.getTime();
  });
};

export const compareAndReturnRecentDate = (
  dateString1: DateTimeString,
  dateString2: DateTimeString
): DateTimeString => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const dateStringMap = new Map<Date, DateTimeString>();

  dateStringMap.set(date1, dateString1);
  dateStringMap.set(date2, dateString2);

  if (date1 > date2) {
    return dateStringMap.get(date1)!;
  } else {
    return dateStringMap.get(date2)!;
  }
};
