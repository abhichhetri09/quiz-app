# Quiz App

A web-based quiz application built using Next.js, Prisma, and Tailwind CSS.

## Description

This is a simple quiz application where users can view quizzes based on different categories. The app is powered by Next.js and Prisma for the backend, using PostgreSQL as the database to store quiz data. The frontend is styled with Tailwind CSS to ensure a responsive and user-friendly interface.

## Features

- Display quizzes categorized by topics like Science, History, Literature, etc.
- Responsive design for a seamless experience across devices.
- Integration with Prisma to handle database queries.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Prisma, PostgreSQL
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 16.x)
- PostgreSQL (if you are running a local instance)

### Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
```

2. Install the dependencies:

```bash
npm install
```

3. Set up your environment variables:

Create a .env file at the root of the project and add your PostgreSQL database credentials:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/quiz-app"
```

4. Run Prisma migration:

```bash
npx prisma migrate dev
```

5. Seed the database (optional):

If you have a seed file configured, you can run the following to populate your database with initial data:

```bash

npx prisma db seed
```

6.Start the development server:

```bash
npm run dev
```

## Open the app in your browser:

Go to http://localhost:3000 to view the quiz application.
Available Scripts
In the project directory, you can run the following scripts:

    npm run dev: Runs the app in development mode using TurboPack (for faster builds and hot reload).

    npm run build: Builds the app for production.

    npm run start: Starts the app in production mode.

    npm run lint: Runs linting on the project.

## Dependencies

### Backend

    @prisma/client: The Prisma Client library for querying the database.

    dotenv: Loads environment variables from a .env file.

### Frontend

    next: The Next.js framework for building the React application.

    react: The React library.

    react-dom: The ReactDOM library for rendering React components.

### Development

    @tailwindcss/postcss: Tailwind CSS PostCSS plugin for Tailwind setup.

    @types/node: TypeScript types for Node.js.

    @types/react: TypeScript types for React.

    @types/react-dom: TypeScript types for ReactDOM.

    prisma: The Prisma CLI for database migrations and seeding.

    tailwindcss: Tailwind CSS framework for utility-first styling.

    typescript: TypeScript support for the project.

## License

    This project is licensed under the MIT License.

    Feel free to contribute and improve the project by submitting a pull request!

### Explanation of Key Sections:

- **Description**: Provides an overview of the app and its functionality.
- **Features**: Outlines key features of the app.
- **Tech Stack**: Lists the technologies used in the project.
- **Getting Started**: Instructions on setting up and running the project locally.
- **Available Scripts**: Details the npm commands available to manage the project.
- **Dependencies**: Lists and briefly describes the important dependencies in the project.

This should help others understand the structure of the project and how to set it up locally.
