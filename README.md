# Dashboard Project

This project is a customizable dashboard built with **Next.js**, utilizing **Zustand** for state management, **Shadcn UI** for the user interface, and **Recharts** for data visualization. The dashboard allows users to add or remove widgets from different categories and search for widgets globally. The project is hosted on **Vercel**.

## Features

- **Next.js**: Leveraging the full power of Next.js for server-side rendering, static site generation, and API routes.
- **Dynamic Content**: All content, including categories and widgets, is managed via JSON files, making it easy to update and extend.
- **Customizable Widgets**: Users can add or remove widgets from any category, allowing for a personalized dashboard experience.
- **Global Search**: Search across all widgets in the dashboard to quickly find what you're looking for.
- **State Management**: Zustand is used for efficient and simple state management.
- **Shadcn UI**: Modern and responsive UI components to provide a sleek and user-friendly interface.
- **Recharts**: Integrated charting library for visualizing data within widgets.

## JSON Data Structure

The JSON data structure used for categories and widgets is as follows:

```json
{
    "category": String,
    "categoryDisplayName": String,
    "widgets": [
        {
            "title": String,
            describe: String
        }
    ]
}
```

## Prerequisites
- **Node.js** (>=14.x)
- **npm** or **yarn**

## Installation

### Clone the repository:
```bash
git clone https://github.com/yourusername/dashboard-project.git
cd dashboard-project
```

Install the dependencies:

```bash
npm install
# or
yarn install
```


Run the development server:

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser to see the application.

Deployment
This project is hosted on Vercel. To deploy your own version, you can link the project to your Vercel account and push the code to your repository. Vercel will automatically build and deploy the latest version.

# Technologies Used
=====================

### Next.js
* Framework for building server-rendered React applications.

### Zustand
* Lightweight state management library.

### Shadcn UI
* Collection of UI components.

### Recharts
* Charting library for React.

### Vercel
* Hosting platform for frontend applications.

