import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="lightContext"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="lightContext">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="darkContext"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="darkContext">{text.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? text.buttonLogout : text.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
