import React, { useEffect, useState } from "react";
import "./App.css";
import { Creator, Product } from "./Types";
import { MainView } from "./Views/MainView";

function App() {
  const [data, setData] = useState<{
    creators: Creator[];
    products: Product[];
  }>({ creators: [], products: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/gabrielpscf/5c571687d5f11b68fd8cfbf990387f8b/raw/6891813ac5ecb0b9b9308c8ccd9bd3a97c456107/data.json",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData: { Creators: Creator[]; Products: Product[] } =
          await response.json();
        const newObject = {
          creators: jsonData.Creators,
          products: jsonData.Products,
        };
        setData(newObject);
      } catch (error) {
        console.error("Error fetching creators:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="w-full">
      <MainView creators={data.creators} products={data.products} />
    </div>
  );
}

export default App;
