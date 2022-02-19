import Header from "./header";
import Menus from "./menu"
import {Container} from "semantic-ui-react"
import Post from "./post"
import Footer from "./footer";

export default function AllWork({blogs,loading,onDelete}){

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

   <Footer />
        </div>
    )
}