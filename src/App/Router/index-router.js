import react from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Page from "../Page/page";

function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/button" element={<Page />} />

        <Route path="*" element={<h1 className="notFound">404</h1>} />
      </Routes>
    </Router>
  );
}
export default app;
