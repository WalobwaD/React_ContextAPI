import React from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MixtapeContext";

export const SongList = () => {
  const { genre, sortOrder, songs } = React.useContext(MixtapeContext);
  const filtered = genre === "all"? songs : songs.filter(song=> song.genre === genre)
  return (
    <>
      {filtered.map(song=> <Song
      {...song}
      key={song.name}
      />)}
    </>
  );
};