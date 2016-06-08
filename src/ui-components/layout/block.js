import React from "react"

function Block({content,title}){
  return <div className="block">
      <div className="block_title">{title}</div>
      <div className="block_content">{content}</div>
    </div>
}

export default Block;