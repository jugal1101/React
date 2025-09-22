import React, { useState, useEffect } from "react";
import "./home.css";

export default function Favourites() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavs(storedFavs);
  }, []);

  const handleRemove = (index) => {
    const updatedFavs = favs.filter((_, i) => i !== index);
    setFavs(updatedFavs);
    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="home-container">
      <h1 className="home-title">❤️ Favourite Movies</h1>

      {favs.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <ul className="movie-list">
          {favs.map((movie, index) => (
            <li key={index} className="movie-item">
              <span>
                🎬 <strong>{movie.name}</strong> - {movie.title}
              </span>
              <button className="delete-btn" onClick={() => handleRemove(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
