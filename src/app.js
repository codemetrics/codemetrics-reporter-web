
import React from "react"
import ReactDOM from "react-dom"

//import {ReactGridLayout} from "react-grid-layout";

import "./style.css";

document.write("<div id='container'></div>");

const data = __DEV__ ? require("../test/sampledata") : {} ;




const Title = function({project_name}) {
  return  <div className="toptitle">
            <h1 className="toptitle--project">
              {project_name}
            </h1>
            <div className="toptitle--subtitle">
            {new Date().toString()}
            </div>
          </div>
}

const Block = function({content,title}){
  return <div className="block">
      <div className="block_title">{title}</div>
      <div className="block_content">{content}</div>
    </div>
}

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
  <div>
    <Title {...data}/>
    <div id="app">
      {[1,2,3].map(i => <Block
        key={i}
        title={i}
        color={backgroundColors[i]}
        content="content"
        />)}
    </div>
  </div>
  ,
  document.getElementById("container")
);