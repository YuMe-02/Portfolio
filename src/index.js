import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Import your CSS file
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <div>
        <App />
        <Loader />
    </div>

);
