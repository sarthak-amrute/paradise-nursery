# Paradise Nursery Shopping Application

An elegant and responsive e-commerce web application for houseplants built with **React**, **Redux Toolkit**, and **Vite**.

---

## 🌿 Project Overview

**Paradise Nursery** is an online plant marketplace designed to bring nature closer to everyday living spaces. The platform allows users to explore a curated catalog of houseplants, learn about their unique care properties, manage an interactive shopping cart, and seamlessly checkout.

This project was developed as the final capstone project for the Coursera course **"Developing Front-End Apps with React"**.

---

## ✨ Features

- **Landing Page**:
  - Immersive full-screen background visual showcasing nature and plants.
  - Company overview and mission statement via the `AboutUs` component.
  - Interactive "Get Started" call-to-action button leading to the catalog.

- **Product Listing Page**:
  - 18+ unique houseplants grouped into 3 distinct categories:
    - *Air Purifying Plants* (Snake Plant, Spider Plant, Peace Lily, Boston Fern, Rubber Plant, Aloe Vera)
    - *Aromatic Fragrant Plants* (Lavender, Jasmine, Rosemary, Mint, Geranium, Eucalyptus)
    - *Low Maintenance Plants* (ZZ Plant, Pothos, Cast Iron Plant, Succulent Mix, Cactus, Money Plant)
  - Detailed plant cards showing high-resolution thumbnails, names, prices, and brief descriptions.
  - Dynamic "Add to Cart" button that disables upon item addition.
  - Navigation bar displaying total items count dynamically in the cart badge.
  - Quick access links to navigate between **Home**, **Plants**, and **Cart**.

- **Shopping Cart**:
  - Real-time calculation of total cart amount and subtotal per item.
  - Item increment (`+`) and decrement (`-`) controls to update item counts.
  - Item deletion button to remove plants from the cart.
  - "Continue Shopping" button to return directly to the product catalog.
  - "Checkout" button with user feedback ("Coming Soon").

- **State Management**:
  - Powered by **Redux Toolkit** (`createSlice`) with centralized store.
  - Synchronized state across components for cart additions, quantity updates, and item removal.

---

## 🛠️ Tech Stack

- **React 19**
- **Redux Toolkit & React-Redux**
- **Vite**
- **Vanilla CSS3** (Responsive design, CSS Flexbox & Grid)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/paradise-nursery.git
   ```

2. Navigate into the project folder:
   ```bash
   cd final-project
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

---

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── AboutUs.css          # Styling for AboutUs component
│   ├── AboutUs.jsx          # Company description and mission
│   ├── App.css              # Landing page styling & background image
│   ├── App.jsx              # Main app entry & landing page view
│   ├── CartItem.css         # Styling for shopping cart page
│   ├── CartItem.jsx         # Cart item display and quantity management
│   ├── CartSlice.jsx        # Redux slice managing cart items state
│   ├── Navbar.css           # Navigation bar styling
│   ├── Navbar.jsx           # Navbar with links to Home, Plants & Cart count
│   ├── ProductList.css      # Catalog layout and plant cards styling
│   ├── ProductList.jsx      # Plant listing grouped by 3 categories
│   ├── store.js             # Redux store configuration
│   ├── main.jsx             # React DOM root and Redux Provider
│   └── index.css            # Base stylesheet
├── index.html
├── package.json
└── README.md
```

---

## 📝 License

This project is open-source and created for educational purposes.
