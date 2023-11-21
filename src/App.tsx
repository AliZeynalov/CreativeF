import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { Creator, CreatorActivityMap, DateTimeString, Product } from "./Types";
import { List } from "./components/List";

function App() {
  const [data, setData] = useState<{
    creators: Creator[];
    products: Product[];
  }>({ creators: [], products: [] });

  const compareAndReturnRecentDate = (
    dateString1: DateTimeString,
    dateString2: DateTimeString,
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

  const creatorsWithLatests = useMemo(() => {
    const products = data.products;
    const creators = data.creators;
    const creatorActivityMap = new Map<string, CreatorActivityMap>();

    for (const product of products) {
      const creatorId = product.creatorId;
      const creator = creators.find((creater) => creater.id === creatorId);

      const activityCount = creatorActivityMap.has(creatorId)
        ? creatorActivityMap.get(creatorId)?.activityCount! + 1
        : 1;

      if (creatorActivityMap.has(creatorId)) {
        let storedLatestActivityDate =
          creatorActivityMap.get(creatorId)?.latestActivity!;
        const latestActivity = compareAndReturnRecentDate(
          storedLatestActivityDate,
          product.createTime,
        );
        if (creator) {
          creatorActivityMap.set(creatorId, {
            creator,
            activityCount,
            latestActivity,
          });
        }
      } else {
        if (creator) {
          creatorActivityMap.set(creatorId, {
            creator: creator,
            activityCount,
            latestActivity: product.createTime,
          });
        }
      }
    }

    return creatorActivityMap;
  }, [data]);

  const sortArraysBasedOnDate = (
    arr: {
      latestActivity: DateTimeString;
      activityCount: number;
      creator: Creator;
    }[],
  ) => {
    return arr.sort((a, b) => {
      const date1 = new Date(a.latestActivity);
      const date2 = new Date(b.latestActivity);
      return date2.getTime() - date1.getTime();
    });
  };

  const sortedActiveCreators = useMemo(() => {
    const allCreators = Array.from(creatorsWithLatests.values());
    const sortedBasedOnActivityCount = allCreators.sort(
      (a, b) => b.activityCount - a.activityCount,
    );
    const sortedArrayBasedOnLatestActivity = sortArraysBasedOnDate(
      sortedBasedOnActivityCount,
    ).slice(0, 3);
    return sortedArrayBasedOnLatestActivity;
  }, [creatorsWithLatests]);

  return (
    <div className="w-full">
      <List creators={sortedActiveCreators} />
    </div>
  );
}

export default App;
