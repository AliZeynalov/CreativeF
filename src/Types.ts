type DotComString = `${string}.com`;
export type DateTimeString =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}${number}${number}${number}${number}${number}${number}${number}+${number}:${number}${number}`;

export interface Creator {
  id: string;
  email: DotComString;
}

export interface Product {
  id: string;
  creatorId: string;
  createTime: DateTimeString;
}

export interface CreatorActivityMap {
  creator: Creator;
  activityCount: number;
  latestActivity: DateTimeString;
}
