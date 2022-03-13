//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "../js/component/TrafficLight.jsx";

ReactDOM.render(<TrafficLight />, document.getElementById("app"));
