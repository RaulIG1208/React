import { createContext, useState } from "react";

//Se crea el context
const ThemeContext = createContext();

const initialTheme = "light";

//Se crea el consumidor de ese context llamado provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => setTheme(e.target.value);

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
