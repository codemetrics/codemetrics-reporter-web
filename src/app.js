import React from "react"
import ReactDOM from "react-dom"

import Block from "./ui-components/layout/block"
import Title from "./ui-components/header/title"

import {LocWidget} from "./components/loc/loc.component";
import {QualityWidget} from "./components/quality/quality.component";

import ReactGridLayout,{WidthProvider} from "react-grid-layout";

const WReactGridLayout = WidthProvider(ReactGridLayout);

import "../node_modules/react-grid-layout/css/styles.css"
import "../node_modules/react-resizable/css/styles.css"

import "./style.css";

document.write("<div id='container'></div>");

const data = __DEV__ ? require("../test/sampledata") : {} ;




const layout =   [
      {i: 'a', x: 0, y: 0, w: 1, h: 1, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 1, static: true},
      {i: 'c', x: 0, y: 0, w: 1, h: 1, static: true}
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
    <WReactGridLayout className="layout body-container" layout={layout} cols={4} rowHeight={150}>
      <div className="widget" key={'a'}><QualityWidget {...data} /></div>
      <div className="widget" key={'b'}><LocWidget {...data} /></div>
    </WReactGridLayout >
  </div>
)


ReactDOM.render(<Application/>,document.getElementById("main-container"));