import React, { useMemo } from "react";
import { compareAndReturnRecentDate, sortArraysBasedOnDate } from "../Common/HelperFunctions";
import { List } from "../Components/List";
import { Creator, CreatorActivityMap, Product } from "../Types";

export interface FetchedRawDataInterface {
  creators: Creator[];
  products: Product[];
}

export const MainView: React.FC<(FetchedRawDataInterface)> = ({creators, products}) => {  
  
  const creatorsWithLatests = useMemo(() => {
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
  }, [creators, products]);

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