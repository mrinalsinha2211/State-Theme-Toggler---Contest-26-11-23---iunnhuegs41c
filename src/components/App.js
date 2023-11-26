import React, { useState } from "react";
import "../styles/App.css";
export default function App() {
  // Step 1: Initialize state for theme
  const [theme, setTheme] = useState("light");

  // Step 2: Apply conditional styling based on the theme

  // Step 3: Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='App' id={theme === "light" ? "light" : "dark"}>
      <h1>Newton School</h1>
      <div>
        <form>
          <label>UserName</label>
          <input />
          <label>Password</label>
          <input />
          <button>Login</button>
        </form>
      </div>
      <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <input
        type="checkbox"
        id="switch"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="switch" className="label">
        Toggle
      </label>
    </div>
  );
}
