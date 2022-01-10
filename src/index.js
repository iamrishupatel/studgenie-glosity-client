import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'react-calendar/dist/Calendar.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./sass/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
