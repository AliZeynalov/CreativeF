import { render, screen } from "@testing-library/react";
import { List } from "../Components/List";
import { exampleProcessedData, rawData } from "./testDataForTheList";
import { MainView } from "../Views/MainView";

test("List Main View Rendering", () => {
  render(<MainView creators={rawData.creators} products={rawData.products} />)

  expect(screen.getByText(/Number of products: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of products: 5/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of products: 4/i)).toBeInTheDocument();
  expect(screen.getByText(/CREATOR EMAIL: 100.com/i)).toBeInTheDocument();
  expect(screen.getByText(/CREATOR EMAIL: 200.com/i)).toBeInTheDocument();
  expect(screen.getByText(/CREATOR EMAIL: 300.com/i)).toBeInTheDocument();
})

test("Test Rendering", () => {
  render(<List creators={exampleProcessedData}/>);
  expect(screen.getByText(/randomEmail@.com/i)).toBeInTheDocument();
  expect(screen.getByText(/Creator EMAIL:/i)).toBeInTheDocument();
  expect(screen.getByText(/Number of products: 5/i)).toBeInTheDocument();
});