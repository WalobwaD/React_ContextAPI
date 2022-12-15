import React, { useContext } from "react";

import { MixtapeContext } from "../context/MixtapeContext";

export const Controls = () => {
  const { songs, genre, setGenre, sortOrder, sort } =
    useContext(MixtapeContext);

  return (
    <div className="controls">
      <select onChange={(event) => setGenre(event.target.value)} value={genre}>
        <option value="all">ALL</option>
        <option value="rap">RAP</option>
        <option value="rock">ROCK</option>
        <option value="hip hop">HIP HOP</option>
        <option value="pop">POP</option>
      </select>
      <button
        onClick={() =>
          sort(sortOrder === "ascending" ? "descending" : "ascending")
        }
      >
        {sortOrder}
      </button>
    </div>
  );
};
