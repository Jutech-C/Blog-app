import { useState } from "react"
import { Button, Image } from "semantic-ui-react"
import "../App.css"

export default function Post({ category, id, image, desc, handleDelete }) {

  function handleDel() {
    handleDelete(id)
  }
  let length = 50
  const [showLess, setShowLess] = useState(true)

  if (desc.length < length) {
    <p>{desc}</p>
  }


  return (
    <div className="post" >


      

            <h1>{category}</h1>
            <img  src={image} size="large" fluid />
            <span style={{ display: "flex", padding: 2 }}>
              <p>{showLess ? `${desc.slice(0, length)}...` : desc}</p>
              <a style={{ color: "blue", cursor: "pointer" }} onClick={() => setShowLess(!showLess)}>
                {showLess ? " Read More" : "Less"}</a>
            </span>
            <br />
            <Button onClick={handleDel} color="red">Delete</Button>
          

    </div>
  )
}