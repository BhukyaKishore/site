# MHK Tech Inc. - Standalone Web Application

This project is a modern, responsive, and standalone React application for MHK Tech Inc. It has been architected to run entirely on the frontend without requiring a backend server or external routing libraries.

## 🚀 Key Features

### 1. Standalone Single-Page Architecture
- **Router-less Navigation**: The application uses a custom state-based navigation system instead of `react-router-dom`. This ensures fast, seamless transitions between views (Home, Products, Chat, etc.) without page reloads or complex routing dependencies.
- **Zero Backend Dependency**: All data flows and interactions are handled locally within the client, making the application easy to deploy and host anywhere (e.g., Netlify, Vercel, S3).

### 2. Intelligent AI Features (Simulated)
- **AI Command Center**: Located in the Hero section, this feature allows users to type natural language queries (e.g., "Tell me about cloud services"). It seamlessly transitions the user to the Chat interface with their context preserved.
- **Interactive AI Assistant**: A full-screen chat interface (`/chat` equivalent) that simulates an intelligent conversation. It features:
    - **Mocked Responses**: Provides realistic, instant feedback to user inquiries about services and products.
    - **Loading States**: Simulates "thinking" time for a realistic user experience.
    - **Chat History**: Maintains the conversation flow within the session.

### 3. Rich Product Showcase
- **Toreo Data Connector**: A dedicated "Our Products" view that highlights the flagship product.
- **Multimedia Integration**: Features high-quality images and an embedded autoplay video to demonstrate product capabilities.
- **Detailed Specs**: clearly presents product benefits, brochures, and call-to-action buttons.

### 4. Modern UI & UX Design
- **Responsive Layout**: Fully responsive navigation and layout that adapts gracefully from large desktop screens to mobile devices.
- **Glassmorphism & Gradients**: Utilizes modern aesthetic trends with translucent headers, smooth gradients, and subtle background blurs.
- **Animations**: Powered by `framer-motion` for engaging entry animations, hover effects, and smooth layout transitions.
- **Interactive Components**: 
    - **Scroll-aware Navbar**: Changes appearance as the user scrolls.
    - **Mobile Menu**: A smooth, animated slide-out menu for mobile navigation.

### 5. Services & Corporate Information
- **Services Portfolio**: elegantly displayed cards detailing AI Solutions, Cloud Architecture, and Data Engineering.
- **Events & Culture**: A "Life at MHK Tech" section with a slideshow gallery showcasing the company culture.
- **Locations & Contact**: Detailed footer and contact sections with multi-national location info.

## 🛠 Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 How to Run
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in the `dist/` folder, ready for static hosting.
