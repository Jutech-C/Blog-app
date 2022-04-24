import { useState } from "react"
import { Button, Image, Segment, Grid, Container } from "semantic-ui-react"

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
    <div style={{ position: "relative",marginLeft:10,marginRight:10}}>


      

            <h1>{category}</h1>
            <Image style={{ width: 900, height: 600 }} src={image} size="large" fluid />
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