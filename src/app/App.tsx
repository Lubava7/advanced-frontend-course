import "./styles/index.scss";
import { AppRouter } from "./providers/routing";
import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>CHANGE THEME</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
