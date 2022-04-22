import Header from "./header";
import Menus from "./menu"
// import { useState } from "react"
import {Button, Container,Message} from "semantic-ui-react"
import Post from "./post"
import Footer from "./footer";

export default function AllWork({blogs,loading,onDelete}){

    // const [quote,setQuote]=useState([])

const postResults=blogs.map(function(blog,index) {
    return(
        <Post 
    handleDelete={handleDelete}
    key={index}
    id={index}
    category={blog.category}
    image={blog.image}
    desc={blog.desc}
/>
    )

})

function handleDelete(id){
    onDelete(id)
}
 // Quote Api 
//  function Quote(){
//     fetch("https://type.fit/api/quotes")
//     .then(function(res){
//       return res.json()
//     }).then(
//       function(data){
//         setQuote(data)
//       }
//     )
//  }


    return(
        <div style={{position:"relative",minHeight:700}}>
 <Container >
   <Header />
    <Menus />
    <br />
    {loading && <p>Loading...</p> }
<div>{postResults}</div>  

   </Container>
   <br /><br /> <br /> <br /> <br />
  {/* <Message>
  <Button onClick={Quote} color="red">Quotes</Button>
  <p>{quote}</p>
  </Message>
     */}
  
   <Footer />
        </div>
    )
}