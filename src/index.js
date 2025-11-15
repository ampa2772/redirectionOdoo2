import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "Bernay Ville d’Avenir";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
