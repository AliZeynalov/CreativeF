import { render, screen } from '@testing-library/react';
import { List } from '../components/List';
import { exampleData } from './testDataForTheList';

test("List renders", () => {
  render(<List creators={exampleData} />)
  expect(screen.getByText(/randomEmail@.com/i)).toBeInTheDocument();

})