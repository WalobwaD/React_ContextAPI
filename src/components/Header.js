import React, { useContext } from "react";
import Switcher from "./Switcher";
import { ThemeContext } from "../App";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const headerStyle = {
    dark: {
      backgroundColor: "black",
      color: "white",
    },
    light: {
      backgroundColor: "#e0e0e0",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  };

  return (
    <div style={themeStyle}>
      <h2 className="heading"> 🔥 Mixtapes</h2>
      <div
        style={{ display: "flex", justifyContent: "end", padding: "1.1rem" }}
      >
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
