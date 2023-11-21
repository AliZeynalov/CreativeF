import { Creator, CreatorLatestProductObj, DateTimeString } from "../Types";
import {
  compareAndReturnRecentDate,
  sortArraysBasedOnDate,
} from "../Common/HelperFunctions";

const creator1 = {
  id: "1000",
  email: "1000.com",
} as Creator;

const creator2 = {
  id: "2000",
  email: "2000.com",
} as Creator;

test("compare dates function to return recent date", () => {
  const date1 = "2023-04-06T21:01:59.752638+02:00" as DateTimeString;
  const date2 = "2023-04-03T04:29:59.75268+02:00" as DateTimeString;
  expect(compareAndReturnRecentDate(date1, date2)).toBe(date1);
});

test("sort array of object based on date", () => {
  const obj1 = {
    latestActivity: "2023-04-06T21:01:59.752638+02:00" as DateTimeString,
    activityCount: 5,
    creator: creator1,
  } as CreatorLatestProductObj;

  const obj2 = {
    latestActivity: "2023-04-03T04:29:59.75268+02:00" as DateTimeString,
    activityCount: 8,
    creator: creator2,
  } as CreatorLatestProductObj;

  expect(sortArraysBasedOnDate([obj2, obj1])).toStrictEqual([obj1, obj2]);
});