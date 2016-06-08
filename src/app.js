import React from "react"
import ReactDOM from "react-dom"

import Block from "./ui-components/layout/block"
import Title from "./ui-components/header/title"

import {LocWidget} from "./components/loc/loc.component";

import ReactGridLayout from "react-grid-layout";

import "./style.css";

document.write("<div id='container'></div>");

const data = __DEV__ ? require("../test/sampledata") : {} ;




const layout =  [
      {i: 'a', x: 0, y: 0, w: 1, h: 1, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 1},
      {i: 'c', x: 0, y: 0, w: 1, h: 1}
    ];




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

const Application = () => (
  <div className="main-container">
    <Title {...data}/>
    <ReactGridLayout className="layout body-container" layout={layout}>
      <LocWidget key="a" {...data} />
      <LocWidget key="b" {...data} />
      <LocWidget key="c" {...data} />
    </ReactGridLayout >
  </div>
)

ReactDOM.render(<Application/>,document.getElementById("main-container"));