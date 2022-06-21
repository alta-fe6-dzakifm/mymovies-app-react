import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";
import Homepage from "../pages/Homepage";
import Favourites from "../pages/Favourites";
import Detail from "../pages/Detailmovie";

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const tempLocal = localStorage.getItem("favMovie");
    if (tempLocal) {
      dispatch(reduxAction("SET_FAVORITES", JSON.parse(tempLocal)));
    }
  }, []);

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p> 404!There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
