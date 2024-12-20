import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Submissions from "./pages/Submissions.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/submissions" element={<Submissions />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </StrictMode>,
);
