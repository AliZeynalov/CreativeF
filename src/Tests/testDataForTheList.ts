import { ListInterface } from "../components/List";
import { DateTimeString } from "../Types";


export const exampleData: ListInterface[] =
  [
    {
      creator: {
        id: "randomId",
        email: "randomEmail@.com",
      },
      activityCount: 5,
      latestActivity: "2023-04-06T21:01:59.752638+02:00" as DateTimeString,
    },
  ];
