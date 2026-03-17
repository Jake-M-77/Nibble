# 🍽️ Nibble

Nibble is a recipe exploration app built to help you discover new foods — especially Spanish cuisine! I built this project while learning Spanish, aiming to explore more dishes without the paywalls of other food websites. This app demonstrates React skills, React Router for navigation, and CSS styling for a responsive, mobile-first design.

## ✨ Features

- Search recipes by **cuisine**, **diet**, or **query**.
- View **recipe details** including ingredients and instructions.
- **Pagination** to navigate through recipe results.
- Mobile-first, responsive design for phones, tablets, and desktops.
- User-friendly interface without ads or paywalls.

## 🛠️ Tech Stack

- React
- React Router
- JavaScript (ES6+)
- CSS with mobile-first design principles
- Spoonacular API for recipe data

## ⚡ Installation

1. Clone the repository:  

   git clone https://github.com/Jake-M-77/Nibble.git

2. Navigate to the project folder:
    
    cd Nibble

3. Install dependencies:

    npm install

4. Add your Spoonacular API key to a .env file:

    VITE_SPOONACULAR_API_KEY=your_api_key_here

5. Run the app:

    npm run dev

## 📂 Project Structure

- public/ — static assets
- src/
  - components/ — UI components (Navbar, RecipeCard, SearchBar, etc.)
  - pages/ — App pages (Home, Cuisine, Diet, Query, RecipeDetail)
  - shared/ — Constants, API helper functions
  - styles/ — CSS files for components and pages
  - App.jsx — Main app with routing
- package.json
- vite.config.js
- README.md

## 🚀 Future Improvements

- Implement caching to reduce repeated API requests.
- Preserve previously loaded results when navigating back from a recipe detail (prevent blank screens).
- Enhance styling and animations for a smoother UX.
- Add user accounts or favorites for personalized recipe lists.

## 🙏 Acknowledgements

- [Spoonacular API](https://spoonacular.com/food-api) for providing recipe data.
- Inspiration from other food websites, adapted into a personal, free experience.