import {List,Button} from "semantic-ui-react"
import {Link} from "react-router-dom"

export default function Header(){
   return(
       <div style={{marginTop:50,width:990}}>
    <div className="ui grid">

       <div  className="left floated four wide column">
           <Button as="a" href="https://www.facebook.com/Justice_Ezeugwu" circular color="facebook" icon="facebook"/>
           <Button as="a" href="https://www.twitter.com/Jutechc/" circular color="twitter" icon="twitter" />
           <Button as="a" href="https://www.instagram.com/jutechc/" circular color="instagram" icon="instagram" />
       </div>
       <div className="center floated six wide column">
       <List >
    <List.Item>Photography blog</List.Item>
    <List.Item style={{fontSize:40, marginLeft:-50}}>PhotoMedia</List.Item>
           </List>
       </div>
       <Link to={"/blogPost"}>
       <div className="right floated four wide column">
        <button  className="ui blue medium button" >Add a Post     <i className="add small icon"></i>  </button>
       </div>
       </Link>
    </div>
    </div>
   )
   
}