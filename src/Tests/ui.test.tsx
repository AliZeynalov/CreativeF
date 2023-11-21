import { render, screen } from '@testing-library/react';
import { List } from '../components/List';
import { exampleData } from './testDataForTheList';
import { compareAndReturnRecentDate } from '../App';
import { DateTimeString } from '../Types';

test("List renders", () => {
  render(<List creators={exampleData} />)
  expect(screen.getByText(/randomEmail@.com/i)).toBeInTheDocument();
  expect(screen.getByText(/Creator EMAIL:/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of products: 5/i)).toBeInTheDocument();
})

test("compare dates function to return recent date", () => {
  const date1 = '2023-04-06T21:01:59.752638+02:00' as DateTimeString;
  const date2 = '2023-04-03T04:29:59.75268+02:00' as DateTimeString;
  expect(compareAndReturnRecentDate(date1, date2)).toBe(date1);
})