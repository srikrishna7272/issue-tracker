
# Issue - Tracker


Issue tracking is the process of recording customer complaints and problems so that they can be resolved in an organized fashion. Issue tracking is generally used within software development but can apply to any customer-facing aspect of a business.


## Demo

https://user-images.githubusercontent.com/105886453/275380291-2a31f558-f7c8-4fc7-9ded-b232daf35e30.mp4


## Features

- User can signin or signout using gmail.
- Users can view dashboards, issues but, he can not edit or delete any of the issue.
- After signing in, Users can create, edit and delete issues.
- Implemented markdown editor/ viewer for creating and viewing issues.
- Users can sort the issues based on status, creation date or issue itself..
- Users can filter issue by status of issue.
- users can view 10 issues per page and users can move from first page to final page or final page to first page. 
- Users can see status of each isse in a dashboard.
- This application is complete mobile responsive.


## Tech Stack

**Client:** Next13.4, TypeScript, Radix-ui, TailwindCSS

**Database** PlanetScale

**Server:**  Prisma


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=""`

`NEXTAUTH_URL="http://localhost:3000"`

`NEXTAUTH_SECRET=""`

`GOOGLE_CLIENT_ID=""`

`GOOGLE_CLIENT_SECRET=""`


## Run Locally

Clone the project

```bash
  git clone https://github.com/srikrishna7272/sk_issue_tracker.git
```

Go to the project directory

```bash
  cd sk_issue_tracker
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Deployment

This application has been deployed using vercel.


## Acknowledgements

 - [Code with Mosh]
