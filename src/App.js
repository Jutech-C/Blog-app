import Header from "./component/header";
import Menus from "./component/menu"
import { Route, Routes } from "react-router"
import AllWork from "./component/allWork";
import Post from "./component/post";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import BlogPost from "./component/blogPost";
import About from "./component/about";
import Contact from "./component/contact";


function App() {

  const [blog, setBlog] = useState([])
  const [loading, setisloading] = useState(false)

  const navigate = useNavigate()


  //make a blogPost
  function handleOnAddmeetup(meetupData) {
    setisloading(true)
    fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => response.json())
      .then((json) => {
        setisloading(false)
        setBlog((data) => [...data, json])

      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        navigate("/")
      })

  }

  //Deleting a blog
  function onDelete(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",

      })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setBlog(blog.filter((data, index) => {
            return index !== id
          }))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }



  return (
    <div>



      <Routes>
        <Route path="/" element={<AllWork
          blogs={blog}
          onDelete={onDelete}
          loading={loading}

        />} />
        <Route path="/header" element={<Header />} />
        <Route path="/menu" element={<Menus />} />
        <Route path="/post" element={<Post />} />
        <Route path="/blogPost" element={<BlogPost onAddMeetup={handleOnAddmeetup} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
