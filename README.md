### Creative Fabrica Interview Assignment - Ali Zeynalov

### DESCRIPTION

Assuming we have list of Creators (id, email) and Products (id, creatorId, createTime) that created by this Creators, we are tasked to calculate and list the 3 creators which 
1) has created the highest number of products
2) has created most recent products.

## Implementation

In order to have the quickest setup I've used create-react-app template to quickly boostrap the project and get hands on the actual logic.
The stack I've used is [React, Typescript, Tailwind.css - styling, Jest - for test]

Project has a very basic structure
- App.js is where the data fetch (json load) is happening.
- I've add new folder of View and `MainView` file below to contain calculations and procesing. I think it's better practice to detach views and components from each other.
- And `List` in `Components` folder is responsible to render the ui table for the active creators/emails. It's pure ui component.
- Tests are contained in `Tests` Folder.


## NOTES
- I've tried to enforce TS Typing as much as possible to ensure the maximum compile-time safety.
- created separate Types file to contain commonly shared interfaces across the project.


## Tests

I've added 4 different unit tests in 2 different suites, 

1) to test the <List> and <MainView> components, to ensure if they're rendering as expected
2) to test the helpers methods I've add another suit for  `compareAndReturnRecentDate` and `sortArraysBasedOnDate`.


## TO START THE PROJECT
1) Run `npm install`
2) Run `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
