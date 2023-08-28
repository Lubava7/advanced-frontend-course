import { useContext, useState } from "react";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import RoutesWrapper from "./routing";
import "./styles/index.scss";
import { ThemeContext, Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // <div className={`app ${theme}`}>
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>CHANGE THEME</button>
      <Counter />
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <RoutesWrapper />
    </div>
  );
};

export default App;
