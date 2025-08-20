# PayQuick

A secure, modern digital payment and transaction management platform built with React, Redux Toolkit, and Tailwind CSS. This application provides users with a clean interface to log in, view their personal profile, manage various accounts, and track recent transactions.

---

### Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Architectural Decisions](#architectural-decisions)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Login Credentials](#login-credentials)
- [Screenshots](#screenshots)

---

### Project Overview

PayQuick is a single-page application designed to simulate a modern banking dashboard. The application features a simple and secure login interface, followed by a protected dashboard where users can view their profile, manage different account types, and interact with a dynamic transaction history. The project showcases robust state management and a clean, maintainable folder structure.

### Key Features

- **Secure User Authentication:** A dedicated login page with protected routes to ensure only authenticated users can access the dashboard.
- **Account Management:** Users can view a summary of their different account types (Savings, Current, Loan).
- **Profile Information:** A dedicated section to display the user's profile details.
- **Dynamic Transaction History:** Displays a list of recent transactions for a selected account, with the ability to switch between accounts.
- **Global Loading State:** A centralized state management for loading indicators across different parts of the application.
- **Responsive Design:** The layout is fully responsive, providing a consistent experience across various devices and screen sizes.

### Architectural Decisions

1.  **Separation of Concerns (Folder Structure):**
    The project is organized with a clear separation of responsibilities to ensure a clean and scalable codebase.

    - **`pages/`**: Contains top-level components that represent a full page or a specific route (`Login.jsx`, `Dashboard.jsx`).
    - **`components/`**: Houses reusable UI components, further organized by domain (`accounts`, `profile`, `transactions`) and type (`layout`, `common`). This prevents a large, unorganized folder and makes components easy to find.
    - **`features/`**: Dedicated to Redux slices (`authSlice`, `accountsSlice`), centralizing all application state management logic in one place. This strictly adheres to the Redux Toolkit pattern.
    - **`routes/`**: Contains the `ProtectedRoute.jsx` component, separating route-related logic from the UI components.

2.  **State Management with Redux Toolkit:**
    Redux Toolkit (RTK) was chosen to provide a predictable state container for the application. `createSlice` was used to simplify Redux boilerplate. A dedicated `loaderSlice` was implemented to manage the loading state for all data fetching operations, allowing for a consistent user experience with minimal code repetition.

3.  **UI Development with Tailwind CSS:**
    Tailwind CSS was used for styling to enable rapid UI development. Its utility-first approach allowed for building complex layouts and components directly in the JSX, ensuring a consistent design system and making the application easy to style and maintain.

4.  **Decoupled Frontend and Backend:**
    A mock API (`mockApi.js`) was implemented to simulate backend data fetching. This decision allowed the frontend development to proceed independently, demonstrating a clean architecture that can be easily connected to a real backend API in the future.

### Technologies Used

- **Frontend:** React, React Router
- **State Management:** Redux Toolkit, React-Redux
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Axios Mock Adapter:** Mock API
- **Axios:** For Fetching API

### Setup and Installation

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yaqubadesola/switch_assessment.git
    cd switch_assessment
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:5173`.

### Login Credentials

To access the dashboard, use the following credentials on the login page:

- **Demo Site:** `https://switch-assesment.netlify.app/`
- **Username:** `yaqub.adesola`
- **Password:** `123456`

### Screenshots

#### Landing Page

![Landing Page](https://github.com/yaqubadesola/switch_assessment/blob/master/docs/images/LandingPage.png)

#### Login Page

![Login Page](https://github.com/yaqubadesola/switch_assessment/blob/master/docs/images/LoginPage.png)

#### Dashboard

![Dashboard](https://github.com/yaqubadesola/switch_assessment/blob/master/docs/images/DashboardPage.png)

---

_This project was created as a technical assessment for Interswitch._
