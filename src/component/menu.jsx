import { React, useState } from "react"
import { Menu, Dropdown, Input, Form } from "semantic-ui-react"
import { Link } from "react-router-dom"
import Photo from "./photo.jpg"
import Nature from "./nature.jpg"
import Love from "./love.jpg"
import Fashion from "./fashion.jpg"
import "../App.css"


export default function Menus({ }) {

    const [showLinks, setShowlinks] = useState(true)

    const [image, setImage] = useState("")
    const [clientId, setClientId] = useState("ih-9EtA6bO2ut30EtZoSE_4H1M2GbHo_LcXADw-nshE")
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    let length = 100
    const [showLess1, setShowLess1] = useState(true)
    const [showLess2, setShowLess2] = useState(true)
    const [showLess3, setShowLess3] = useState(true)
    const [showLess4, setShowLess4] = useState(true)

    const desc1 = "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It is employed in many fields of science, manufacturing , and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication"
    const desc2 = "According to the editorial policy of Fashion Theory: The Journal of Dress, Body & Culture, fashion is defined as the cultural construction of the embodied identity. As such, it encompasses all forms of self-fashioning, including street styles, as well as so-called high fashion created by designers and couturiers. Fashion also alludes to the way in which things are made; to fashion something is to make it in a particular form. Most commonly, fashion is defined as the prevailing style of dress or behavior at any given time, with the strong implication that fashion is characterized by change. As Shakespeare wrote,The fashion wears out more apparel than the man"
    const desc3 = "Love encompasses a range of strong and positive emotional and mental states, from the most sublime virtue or good habit, the deepest interpersonal affection, to the simplest pleasure. An example of this range of meanings is that the love of a mother differs from the love of a spouse, which differs from the love for food. Most commonly, love refers to a feeling of a strong attraction and emotional attachment. Love is considered to be both positive and negative, with its virtue representing human kindness, compassion, and affection, as the unselfish loyal and benevolent concern for the good of another and its vice representing human moral flaw, akin to vanity, selfishness, amour-propre, and egotism, as potentially leading people into a type of mania, obsessiveness or codependency."
    const desc4 = "The wonders of creation reveal Jehovahs creation.When you gave at the things created by HIM, you begin to imagine how powerful he is indeed beacuse for all creatures to be unique and wonderful on its own shows that the maker must posess some level of great power.on the other hand, creatures shows how loving the maker is in that he wants us(humans) to enjoy life that is why he made other things so beautiful that we wont be bored of living"

    function handleChange(event) {
        setImage(event.target.value)
    }

    function handleSubmit() {
        setLoading(true)
        fetch("https://api.unsplash.com/search/photos?page=1&query=" + image + "&client_id=" + clientId)

            .then((response) => response.json())
            .then((data) => {
                setResult(data.results)
                setLoading(false)
            })

    }


    return (
        <div>



            <Menu className="menus" inverted style={{ marginTop: 20 }}>



                <Menu.Item className="menuItem" as={Link} to="/" name="Home" />
                <Menu.Item className="menuItem" as={Link} to="/about" name="About" />
                <Menu.Item className="menuItem" as={Link} to="/contact" name="Contact" />
                <Dropdown item text="Menu" className="dropdown" >

                    <Dropdown.Menu  >
                        <Dropdown.Item as={Link} to="/" text="Home" />
                        <Dropdown.Item as={Link} to="/about" text="About" />
                        <Dropdown.Item text="Contact" as={Link} to="/contact" />
                        <Dropdown.Item as={Link} to="/blogPost" text="Add a Post" />

                    </Dropdown.Menu>
                </Dropdown>

                <Menu.Item position="right">
                    <Form onSubmit={handleSubmit}  >
                        <Input type="text" onChange={handleChange} className="icon" icon="search" placeholder="Search for Photos Online" />
                    </Form>
                </Menu.Item>

            </Menu>
            {loading && <p>Loading...</p>}
            <div className="searchimg" >
                {result.map((photo) => (
                    <img src={photo.urls.small} />

                ))}
            </div>
            <br></br>
            <div className="menucontent">

                <h1>Photography</h1>
                <img src={Photo} />
                <span style={{ display: "flex", padding: 2 }}>

                    <p style={{ width: 900 }}>{showLess1 ? `${desc1.slice(0, length)}...` : desc1}</p>
                    <a onClick={() => setShowLess1(!showLess1)}>
                        {showLess1 ? " Read More" : "Less"}</a>
                </span>

            </div>

            <div className="menucontent">

                <h1>Fashion</h1>
                <img src={Fashion} />
                <span style={{ display: "flex", padding: 2 }}>

                    <p style={{ width: 900 }}>{showLess2 ? `${desc2.slice(0, length)}...` : desc2}</p>
                    <a onClick={() => setShowLess2(!showLess2)}>
                        {showLess2 ? " Read More" : "Less"}</a>
                </span>

            </div>

            <div className="menucontent">


                <h1>Love</h1>
                <img src={Love} />
                <span style={{ display: "flex", padding: 2 }}>

                    <p style={{ width: 900 }}>{showLess3 ? `${desc3.slice(0, length)}...` : desc3}</p>
                    <a onClick={() => setShowLess3(!showLess3)}>
                        {showLess3 ? " Read More" : "Less"}</a>
                </span>

            </div>

            <div className="menucontent">



                <h1>Nature</h1>
                <img src={Nature} />
                <span style={{ display: "flex", padding: 2 }}>

                    <p style={{ width: 900 }}>{showLess4 ? `${desc4.slice(0, length)}...` : desc4}  </p>
                    <a onClick={() => setShowLess4(!showLess4)}>
                        {showLess4 ? " Read More" : "Less"}</a>
                </span>

            </div>

        </div>
    )
}