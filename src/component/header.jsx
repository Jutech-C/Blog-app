import { List, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "../App.css"

export default function Header() {
   return (
      <div style={{ marginTop: 50}}>
         <div className="ui grid header  ">

            <div className="left floated four wide column social ">
               <Button className="socials" as="a" href="https://www.facebook.com/Justice_Ezeugwu" circular color="facebook" icon="facebook" />
               <Button className="socials" as="a" href="https://www.twitter.com/Jutechc/" circular color="twitter" icon="twitter" />
               <Button className="socials" as="a" href="https://www.instagram.com/jutechc/" circular color="instagram" icon="instagram" />
            </div>
            <div className="center floated six wide column">
               <List >
                  <List.Item className="photoblog">Photography blog</List.Item>
                  <List.Item className="photomedia" >PhotoMedia</List.Item>
               </List>
            </div>
            <Link to={"/blogPost"}>
               <div className="right floated four wide column posts">
                  <button className="ui blue medium button " >Add a Post    <i className="add small icon"></i>  </button>
               </div>
            </Link>
         </div>
      </div>
   )

}