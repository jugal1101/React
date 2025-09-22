import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home({ username, setIsLoggedIn, setUsername }) {
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);


  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleAdd = () => {
    if (!movieName || !movieTitle) {
      alert("Please enter both movie name and title!");
      return;
    }

    if (editIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = { name: movieName, title: movieTitle };
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      setMovies([...movies, { name: movieName, title: movieTitle }]);
    }

    setMovieName("");
    setMovieTitle("");
  };

  const handleEdit = (index) => {
    setMovieName(movies[index].name);
    setMovieTitle(movies[index].title);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("username");
    navigate("/");
  };

  const handleFavourite = (movie) => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!storedFavs.find((m) => m.name === movie.name && m.title === movie.title)) {
      storedFavs.push(movie);
      localStorage.setItem("favourites", JSON.stringify(storedFavs));
      alert("Added to favourites ❤️");
    }
  };

  return (
    <div className="home-container">
<div className="home-header">
  <h1 className="home-title">Welcome, {username} 🎬</h1>
  <div>
    <button
      className="fav-nav-btn"
      onClick={() => navigate("/favourites")}
    >
      ❤️ Favourites
    </button>
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  </div>
</div>

      <div className="form-container column-layout">
        <input
          type="text"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="home-input"
        />
        <input
          type="text"
          placeholder="Movie Director"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          className="home-input"
        />
        <button className="home-button" onClick={handleAdd}>
          {editIndex !== null ? "Update Movie" : "Add Movie"}
        </button>
      </div>

      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <span>
              🎥 <strong>{movie.name}</strong> - {movie.title}
            </span>
            <div className="movie-actions">
              <button className="edit-btn" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <button className="fav-btn" onClick={() => handleFavourite(movie)}>
                ❤️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
