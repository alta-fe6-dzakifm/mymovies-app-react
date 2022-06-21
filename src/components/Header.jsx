import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { withRouter } from "../utils/navigation";

import { ThemeContext } from "../utils/context";

const CustomHeader = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <nav className="sticky top-0 w-full px-2 py-4 flex  bg-gray-500 items-center">
      <div className="text-white font-bold italic text-3xl ml-5">
        <a href="/">Cinepolis</a>
      </div>

      <div className="text-white ml-auto flex space-x-8 font-bold  italic text-3xl">
        <a href="/favourites">Favorite</a>
        {theme === "dark" ? (
          <FaSun
            className="w-8 h-8 text-white"
            onClick={() => handleThemeChange("light")}
          />
        ) : (
          <FaMoon
            className="w-8 h-8 text-white"
            onClick={() => handleThemeChange("dark")}
          />
        )}
      </div>
    </nav>
  );
};

export default withRouter(CustomHeader);
