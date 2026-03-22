# Transport Services Portal Redesign Project

## 1. Project Description
This project is a conceptual redesign of a government transport services portal, developed as a prototype for a **Human-Computer Interaction (HCI)** course. The primary objective is to demonstrate an improved digital interface model that enhances service accessibility, simplifies navigation, and provides a more intuitive user experience for citizens interacting with transport department services.

## 2. Background / Problem
Legacy government portals often suffer from usability barriers that hinder efficient service delivery. Common issues identified during research include:
*   **Complex Navigation**: Scattered links and inconsistent menu structures make it difficult for users to find specific services.
*   **Information Overload**: Dense, jargon-heavy content without clear visual hierarchy.
*   **Limited Mobile Usability**: Legacy designs that do not adapt effectively to modern mobile or tablet devices.
*   **Fragmented Interaction**: Application, payment, and tracking processes are often disconnected, leading to a disjointed user journey.

## 3. Project Goals
The redesign focuses on several key HCI improvements:
*   **Service Discoverability**: A centralized service catalog with clear categorization.
*   **Simplified Navigation**: A logical breadcrumb system and consistent sidebar navigation.
*   **Consistent Interface Design**: Use of a unified design system for components, forms, and feedback messages.
*   **Visual Accessibility**: Improved contrast, typography, and iconography (using Lucide icons) for better readability.
*   **Interaction Feedback**: Clear visual indicators for application progress and successful submissions.

## 4. Prototype Scope
This application is a **frontend-only prototype** and is not connected to any actual government backend or database. It is intended to demonstrate interface structure, navigation design, and interactive concepts. 
*   Data entered into forms is not transmitted to any server.
*   Certain advanced features use placeholder content to represent planned interface models.

## 5. Implemented Features
The prototype includes the following functional components:
*   **Service Catalog**: A browseable interface for Driving License, Vehicle Services, and Transport Permits.
*   **Interaction Models**: Working mock forms for main services that demonstrate form grouping and validation design.
*   **Responsive Layout**: A fully adaptive interface built with Tailwind CSS that works across mobile, tablet, and desktop viewports.
*   **User Dashboard**: A personalized view showing simulated application counts and recent activity.
*   **Prototype Notices**: Explicit labeling of experimental components to maintain transparency regarding the prototype status.

## 6. Placeholder / Simulated Features
To provide a complete walkthrough of the user journey, several interactions are simulated using frontend-only logic:
*   **Form Submission**: Data is captured and stored temporarily in browser `localStorage`.
*   **ID Generation**: The system generates unique mock application IDs to demonstrate the tracking flow.
*   **Application Tracking**: A functional status lookup interface that retrieves simulated data from `localStorage`.
*   **Payment Simulation**: A mock payment gateway that mimics a successful transaction flow and record generation.
*   **Service Placeholders**: Secondary services are represented by standardized placeholder pages to demonstrate navigation breadth.

## 7. Technology Stack
The project is built using modern web technologies focused on component-based architecture and responsive styling:
*   **React (v19)**: Core library for building the user interface.
*   **Vite**: Frontend build tool for rapid development and optimized bundling.
*   **Tailwind CSS (v4)**: Utility-first CSS framework used for styling the responsive design system.
*   **React Router (v7)**: Handles client-side routing and navigation between service models.
*   **Lucide React**: Comprehensive icon library for visual cues.

## 8. Project Structure
The codebase follows a modular structure to ensure maintainability:
*   `src/components`: Reusable UI elements (Navbar, Breadcrumb, DashboardCard).
*   `src/pages`: Interface models for individual services and dashboard views.
*   `src/data`: Static service data, announcements, and news feeds.
*   `src/layouts`: Organizational wrappers for consistent page structure.
*   `src/utils`: Logic for simulated data persistence (e.g., `simulation.js`).
*   `src/App.jsx`: Central routing and application configuration.

## 9. Running the Project
To run this prototype locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **View Prototype**:
    Open the local URL provided by Vite (usually `http://localhost:5173`) in your web browser.

## 10. Academic Context
This project was developed for academic purposes as part of an HCI curriculum. It serves as a visual and interactive demonstration of how usability principles—such as Fitts's Law, Hick's Law, and Gestalt principles—can be applied to modernize public service portals.

---
**Disclaimer**: This is a conceptual prototype. It does not provide real government services.
