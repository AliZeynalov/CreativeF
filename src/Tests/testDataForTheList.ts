import { ListInterface } from "../Components/List";
import { DateTimeString } from "../Types";
import { FetchedRawDataInterface } from "../Views/MainView";

export const exampleProcessedData: ListInterface[] = [
  {
    creator: {
      id: "randomId",
      email: "randomEmail@.com",
    },
    activityCount: 5,
    latestActivity: "2023-04-06T21:01:59.752638+02:00" as DateTimeString,
  },
];

export const rawData: FetchedRawDataInterface = {
  creators: [
    {
      id: "100",
      email: "100.com",
    },
    {
      id: "200",
      email: "200.com",
    },
    {
      id: "300",
      email: "300.com",
    },
    {
      id: "400",
      email: "400.com",
    },
    {
      id: "500",
      email: "500.com",
    },
  ],
  products: [
    {
      id: "prod_2O5Yst3NQSf8b6xBQCVgi4KJw6p",
      creatorId: "100",
      createTime: "2023-09-06T21:01:59.752638+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YsrUkLfiXdxsyNmJTqnU0UJj",
      creatorId: "100",
      createTime: "2023-09-05T17:03:59.752633+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YspWrajCYX8RXqPhcZOSiPM2",
      creatorId: "200",
      createTime: "2023-10-05T13:54:59.752746+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YspknYGnvrv8ZkPD6MfBjcJW",
      creatorId: "200",
      createTime: "2023-10-05T06:52:59.752688+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YssxasaiLPEw6xRU6ojctB1X",
      creatorId: "300",
      createTime: "2023-05-04T09:05:59.752712+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YsrAIzxiFO89eqwaMReS0iO3",
      creatorId: "300",
      createTime: "2023-05-03T14:09:59.752762+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YsqsdbkBKUACv8s2GvZt4QdK",
      creatorId: "usr_2O5YsqF9ac6kaPaF1TwzsLrWe5j",
      createTime: "2023-04-03T04:29:59.75268+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5Yst8OmYwvrlupxTkSYfKQYEc",
      creatorId: "100",
      createTime: "2023-03-31T10:23:59.75271+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YspZ8u32ELGxaPDvO2TFTRuQ",
      creatorId: "usr_2O5YssnJNfDynPxoCsT5hsulDwM",
      createTime: "2023-03-31T01:01:59.752642+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5Ysr2nxph8R3FavqxgShvdsvs",
      creatorId: "usr_2O5YssxXRcr3wUwqYANw7JPB7yh",
      createTime: "2023-03-30T19:07:59.75277+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YstmMC00dxwjxLLJ80iCWxrC",
      creatorId: "100",
      createTime: "2023-03-30T09:36:59.752662+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YswMF2nxSpyboo8Ygse6Sc2V",
      creatorId: "300",
      createTime: "2023-03-29T17:16:59.752682+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5Ystz0dcLPom7o3sJ3vyThe4c",
      creatorId: "300",
      createTime: "2023-03-29T11:09:59.752772+02:00" as DateTimeString,
    },
    {
      id: "prod_2O5YsvyEVhN9U1etEaNdpuxBMTQ",
      creatorId: "100",
      createTime: "2023-03-29T04:09:59.752788+02:00" as DateTimeString,
    },
    {
      "id": "prod_2O5YsrjNMsUcMIKPbWdvDX2pitm",
      "creatorId": "usr_2O5YssnJNfDynPxoCsT5hsulDwM",
      "createTime": "2023-02-10T04:55:59.752635+01:00" as DateTimeString,
    },
    {
      "id": "prod_2O5YsqO2dYneRRr9HPX0EOqPrXi",
      "creatorId": "usr_2O5YsqNRkt07VzNWx32RdF9wKeH",
      "createTime": "2023-02-09T15:55:59.752704+01:00" as DateTimeString,
    },
    {
      "id": "prod_2O5YsszZuBSI184NCNwrmW7gQoK",
      "creatorId": "usr_2O5YssnJNfDynPxoCsT5hsulDwM",
      "createTime": "2023-02-08T21:44:59.752644+01:00" as DateTimeString,
    },
    {
      "id": "prod_2O5YssSCdABSl9RsB4PbqmlvRzW",
      "creatorId": "500",
      "createTime": "2023-01-07T06:49:59.752627+01:00" as DateTimeString,
    },
    {
      "id": "prod_2O5YsujiBlcFU2tZlNcharXQyhA",
      "creatorId": "500",
      "createTime": "2023-01-06T10:43:59.752768+01:00" as DateTimeString,
    }
  ],
};
