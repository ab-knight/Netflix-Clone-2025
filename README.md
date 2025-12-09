📺 Netflix Clone (React + TMDB API)

A fully responsive Netflix Clone built using React, TMDB API, and Axios, featuring:

🎬 Movie categories (Trending, Originals, Top Rated, etc.)

🎞 Horizontal scrolling movie rows

▶ YouTube trailer player (on movie click)

🟥 Netflix-style fixed header with scroll effect

📱 Fully responsive mobile menu

⚡ Fast fetching with Axios

🎨 Smooth hover animations

🚀 Live Demo

https://ab-knight.github.io/Netflix-Clone-2025/

📌 Features
✅ Frontend

Netflix-style UI

Responsive header with mobile dropdown

Scroll-triggered black header

Row component with horizontal scroll

Large & small movie posters

Hover zoom animation

YouTube trailer popup

🔌 API

Fetches movies from The Movie Database (TMDB)

Uses Axios for all API requests

Supports multiple categories

📱 Responsive

Works on desktop, tablet, and mobile

Mobile-friendly browse menu

Adaptive row sizes based on screen

🛠️ Tech Stack
Technology	Purpose
React.js	Frontend framework
Axios	API requests
TMDB API	Movie data
movie-trailer	Finds trailer URLs
react-youtube	Embeds YouTube trailers
CSS / Flexbox	Styling & layout
📂 Project Structure
src/
 ├── components/
 │    ├── Header/Header.jsx
 │    ├── Header/header.css
 │    ├── Row/Row.jsx
 │    ├── Row/Row.css
 │    └── Banner/Banner.jsx (if you have one)
 ├── Utils/
 │    └── axios.js
 ├── App.js
 ├── index.js
 └── assets/
      └── Images/

🔧 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/ab-knight/netflix-clone.git
cd netflix-clone

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Inside your project root:

REACT_APP_TMDB_API_KEY=your_api_key_here

4️⃣ Start development server
npm start

🔑 Setting up TMDB API

Go to https://www.themoviedb.org/

Create an account

Navigate to Settings → API

Generate API Key (v3 auth)

Paste into your .env file

🖥️ Usage

Browse movie categories

Hover to see animation

Click movie → Auto-search trailer → Play in YouTube popup

Scroll horizontally to see all movies

Mobile: Use the Browse dropdown

Header turns black when scrolling

🧩 Future Improvements

Add user authentication (Firebase)

Add “My List” page

Add search functionality

Add pagination

Add loading skeletons

🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first.

📜 License

This project is licensed under MIT License.
