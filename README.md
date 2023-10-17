
# Issue - Tracker


Issue tracking is the process of recording customer complaints and problems so that they can be resolved in an organized fashion. Issue tracking is generally used within software development but can apply to any customer-facing aspect of a business.


## Demo

https://user-images.githubusercontent.com/105886453/275380291-2a31f558-f7c8-4fc7-9ded-b232daf35e30.mp4


## Features


- The user can sign in or sign out using Gmail.
- Users can view dashboards and issues, but they cannot edit or delete any of them.
- After signing in, users can create, edit, and delete issues.
- implemented a markdown editor and viewer for creating and viewing issues.
- Users can sort the issues based on status, creation date, or the issue itself.
- Users can filter issues by status.
- Users can view 10 issues per page, and they can move from the first page to the final page or the final page to the first page.
- Users can see the status of each issue on a dashboard.
- This application is completely mobile-responsive.




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



