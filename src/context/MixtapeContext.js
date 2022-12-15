import React from "react";

export const MixtapeContext = React.createContext();

export const MixtapeProvider = ({ children, songs }) => {
  const [genre, setGenre] = React.useState("all");
  const [sortOrder, sort] = React.useState("ascending");
  return (
    <MixtapeContext.Provider
      value={{ songs, genre, setGenre, sortOrder, sort }}
    >
      {children}
    </MixtapeContext.Provider>
  );
};