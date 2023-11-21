import { render, screen } from '@testing-library/react';
import { List } from '../components/List';
import { exampleData } from './testDataForTheList';

test("List renders", () => {
  render(<List creators={exampleData} />)
  expect(screen.getByText(/randomEmail@.com/i)).toBeInTheDocument();
  expect(screen.getByText(/Creator EMAIL:/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of products: 5/i)).toBeInTheDocument();

})