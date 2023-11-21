import { Creator, DateTimeString } from "../Types";

export interface ListInterface {
  latestActivity: DateTimeString;
  activityCount: number;
  creator: Creator;
}

// const generateRandomAvatar = (name: string) => {
//   const seed = name.charCodeAt(0) || Math.floor(Math.random() * 1000);
//   return `https://picsum.photos/seed/${seed}/64/64`;
// };

export const List: React.FC<{ creators: ListInterface[] }> = ({ creators }) => {
  console.log('\nCREATORS: ', creators);
  return (
    <div className="flex flex-col justify-between">
      {creators.map((activity) => (
        <div
          key={activity.creator.id}
          className="p-4 rounded-md shadow-md justify-center transition-transform transform hover:scale-105"
        >
          <div className="flex items-center space-x-2">
            {/* <img
              src={generateRandomAvatar("")}
              alt={`${activity.creator.email}'s avatar`}
              className="w-4 h-8 rounded-full"
            /> */}
            <p className="text-sm text-gray-700"> Creator EMAIL: {activity.creator.email}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">Date of the Latest product of the creator: {new Date(activity.latestActivity).toString()}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg text-gray-900">
              Number of products: {activity.activityCount} activities
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
