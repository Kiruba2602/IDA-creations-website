# IDA Creations

This repository contains the code for a company website with both frontend and backend parts. The frontend is built with React.js and styled using TailwindCSS, while the backend is developed with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design
- Navigation bar with smooth scrolling
- Home, About, Services, Projects, Careers, and Contact sections
- Social media links
- Contact form
- Backend API for handling contact form submissions

## Tech Stack

### Frontend

- React.js
- TailwindCSS
- React Scroll
- FortAwesome Icons

### Backend

- Node.js
- Express
- Cors
- Body-Parser
- Mongoose

## Frontend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/company-website.git
    cd IDA-Creations-website/frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

4. **Build for production:**

    ```bash
    npm run build
    ```

## Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd ../backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file for environment variables:**

    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Start the production server:**

    ```bash
    npm start
    ```

## Usage

1. **Ensure both frontend and backend servers are running.**
2. **Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.**

## Project Structure

```plaintext
company-website/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── Projects.js
│   │   │   ├── Careers.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── .gitignore
└── README.md
