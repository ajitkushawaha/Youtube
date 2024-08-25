import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import VideoProvider from "./context/VideoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

