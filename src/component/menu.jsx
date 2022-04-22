import {React,useState } from "react"
import {Menu,Dropdown,Input,Image,Form} from "semantic-ui-react"
import { Link } from "react-router-dom"

export default function Menus({}){

    
const [image,setImage]=useState("")
const [clientId,setClientId]=useState("ih-9EtA6bO2ut30EtZoSE_4H1M2GbHo_LcXADw-nshE")
const [result,setResult]=useState([])
const [loading,setLoading]=useState(false)

function handleChange(event){
setImage(event.target.value)
}

function handleSubmit(){
    setLoading(true)
    fetch("https://api.unsplash.com/search/photos?page=1&query="+image+"&client_id="+clientId)
    
       .then((response) => response.json())
       .then((data)=> {
       setResult(data.results)
       setLoading(false)
       })
   
}
    return(
        <div>
<Menu inverted style={{marginTop:20,width:990}}>
<Menu.Item  as={Link} to="/" name="Home"   />
<Menu.Item as={Link} to="/about" name="About"/>
<Menu.Item as={Link} to="/contact" name="Contact"  />
<Dropdown  item text="Pages" >
    <Dropdown.Menu>
    <Dropdown.Item as={Link} to="/" text="Home" />
   <Dropdown.Item as={Link} to="/about" text="About" />
  <Dropdown.Item text="Contact" as={Link} to="/contact" />
  <Dropdown.Item as={Link} to="/blogPost" text="Add a Post"/>
   
</Dropdown.Menu>
</Dropdown>

<Menu.Item position="right">
<Form onSubmit={handleSubmit}  >
<Input type="text" onChange={handleChange} className="icon" icon="search" placeholder="Search for Photos Online" />
</Form>
</Menu.Item>

</Menu>
{loading && <p>Loading...</p> }
<div style={{position:"relative", width:1400,marginLeft:230}}>
{result.map((photo) => (
     <Image style={{width:700,height:500}}  src={photo.urls.small}   /> 
  
))}
</div>
        </div>
    )
}