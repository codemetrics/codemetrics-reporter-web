import React from "react"

function Title({project_name}) {
  return  <div className="toptitle">
            <h1 className="toptitle--project">
              {project_name}
            </h1>
            <div className="toptitle--subtitle">
            {new Date().toString()}
            </div>
          </div>
}


export default Title;
