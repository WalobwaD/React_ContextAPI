import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../../App";

const Switcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Switch
      uncheckedIcon={false}
      checkedIcon={false}
      onColor={"#000"}
      onChange={handleThemeToggle}
      checked={theme === "light"}
      size="small"
    />
  );
};

export default Switcher;
