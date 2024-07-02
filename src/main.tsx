import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ReactIcon from "./assets/react.svg";

import "./index.css";

/**
 * Page imports
 */
import App from "./App.tsx";
import One from "./pages/1.tsx";
import Layout from "./components/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/1" element={<One />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
);
