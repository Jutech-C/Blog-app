import React from "react"
import {Menu,Dropdown,Input} from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Menus({}){

    return(
        <div>
<Menu inverted style={{marginTop:20,width:990}}>
<Menu.Item  as={Link} to="/" name="Home"   />
<Menu.Item as={Link} to="/about" name="About"/>
<Menu.Item as={Link} to="/contact" name="Contact"  />
<Dropdown  item text="Pages" >
    <Dropdown.Menu>
    <Dropdown.Item as={Link} to="" text="Home" />
   <Dropdown.Item as={Link} to="/about" text="About" />
  <Dropdown.Item text="Contact" as={Link} to="/contact" />
  <Dropdown.Item as={Link} to="/blogPost" text="Add a Post"/>
   
</Dropdown.Menu>
</Dropdown>

<Menu.Item position="right">
<Input className="icon" icon="search" />
</Menu.Item>

</Menu>
        </div>
    )
}