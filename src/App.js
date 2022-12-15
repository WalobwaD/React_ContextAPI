import React, { createContext, useState } from "react";
import { MixtapeProvider } from "./context/MixtapeContext.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";

export const ThemeContext = createContext({});

function MixtapeApp() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <MixtapeProvider songs={songs}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className="app">
            <Header />
            <Hero />
          </div>
        </ThemeContext.Provider>
      </MixtapeProvider>
    </div>
  );
}

export default MixtapeApp;

export const songs = [
  {
    artist: "Smash Mouth",
    genre: "pop",
    name: "All Star",
    year: 1999,
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Hotline Bling",
    year: 2015,
  },
  {
    artist: "Lizzo",
    genre: "hip hop",
    name: "Juice",
    year: 2019,
  },
  {
    artist: "Rick Astley",
    genre: "rock",
    name: "Never Gonna Give You Up",
    year: 1987,
  },
  {
    artist: "4 Non Blondes",
    genre: "rock",
    name: "What's Up",
    year: 1993,
  },
];
