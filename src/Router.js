import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keyboard from "./pages/Keyboard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Keyboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
