import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Song } from "./Song";
import { MixtapeContext } from "../context/MixtapeContext";

export const SongList = () => {
  const { genre, sortOrder, songs } = useContext(MixtapeContext);
  const filtered =
    genre === "all" ? songs : songs.filter((song) => song.genre === genre);

  const { theme } = useContext(ThemeContext);

  const songListStyle = {
    dark: {
      backgroundColor: "#333",
      color: "white",
    },
    light: {
      backgroundColor: "#eee",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
    },
  };

  const themeStyle = {
    ...songListStyle.common,
    ...(theme === "light" ? songListStyle.light : songListStyle.dark),
  };
  return (
    <div style={themeStyle}>
      {filtered.map((song) => (
        <Song {...song} key={song.name} />
      ))}
    </div>
  );
};
