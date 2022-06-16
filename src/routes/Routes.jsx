import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detailmovie";
import Homepage from "../pages/Homepage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:movie_id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
