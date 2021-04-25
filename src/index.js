import React from "react";
import ReactDOM from "react-dom";
import App from './js/App';
import './scss/app';


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;