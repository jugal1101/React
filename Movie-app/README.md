 ## 🎬 Movie App

A simple React Movie App with login system, CRUD operations for movies, and a favourites section — built using React Router and localStorage.

✨ Features

🔐 Login/Logout system (user session maintained until logout).

👤 Personalized welcome message with username.

➕ Add, Edit, Delete movies (CRUD operations).

💾 Data persistence using localStorage (no data loss on refresh).

❤️ Favourites Page: Save movies to favourites and manage them separately.

🔄 Protected routes:

Cannot access Home or Favourites without login.

Cannot go back to Login without logging out.

🛠️ Tech Stack

React (Vite or CRA setup)

React Router v6

CSS (custom styles)

localStorage for data persistence

📂 Project Structure
movie-app/
│── src/
│   ├── Components/
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── Favourites.jsx
│   │   ├── login.css
│   │   ├── home.css
│   │   └── favourites.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│── package.json
│── README.md

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/movie-app.git
cd movie-app

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


App will be running at: http://localhost:5173/
 (if using Vite).

📌 Usage

Open the app and login with your name.

Add movies with name & title (they appear in a list).

You can edit or delete movies.

Click on ❤️ button beside a movie to add it to Favourites.

Go to Favourites page (header button) to view and manage favourite movies.

Click Logout to end session (you cannot go back without logging out).

## 🖼️ Demo

Login Page

Home Page (CRUD movies)

Favourites Page

## 📜 License

This project is open-source and free to use.