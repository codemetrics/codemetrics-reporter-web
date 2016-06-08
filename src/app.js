
import React from "react"
import ReactDOM from "react-dom"

import Block from "./ui-components/layout/block"
import Title from "./ui-components/header/title"

//import {ReactGridLayout} from "react-grid-layout";

import "./style.css";

document.write("<div id='container'></div>");

const data = __DEV__ ? require("../test/sampledata") : {} ;









const backgroundColors = [
"#1976D2",
"#388E3C",
"#F44336",
"#FFA000",
"#5D4037",
"#FFEB3B",
"#512DA8",
"#D32F2F"
];

ReactDOM.render(
  <div className="main-container">
    <Title {...data}/>
    <div className="body-container">

    </div>
  </div>
  ,
  document.getElementById("main-container")
);