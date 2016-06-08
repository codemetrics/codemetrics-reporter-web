import React from "react"
import "./title.css";

function Title({project_name}) {
  return  <div className="toptitle">
            <h1 className="toptitle--project">
              {project_name}
            </h1>
            <div className="toptitle--subtitle">
            </div>
          </div>
}


export default Title;
