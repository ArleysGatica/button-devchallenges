import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Page from "../Page/page";
import { Button } from "../Components/Buttons/button";

export function app() {
  return (
    <Router>
      <Routes>
        <Route path="/Page" element={<Page />} />

        <Route path="buttons" element={<Button />} />
        <Route path="*" element={<h1 className="notFound">404</h1>} />
      </Routes>
    </Router>
  );
}
export default app;
