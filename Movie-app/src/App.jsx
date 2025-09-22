import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Favourites from "./Components/Favourites";
import Login from "./Components/login";
import Home from "./Components/home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to="/home" />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
          )
        }
      />
      <Route
        path="/home"
        element={
          isLoggedIn ? (
            <Home
              username={username}
              setIsLoggedIn={setIsLoggedIn}
              setUsername={setUsername}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/favourites"
        element={isLoggedIn ? <Favourites /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
