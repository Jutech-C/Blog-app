import Header from "./header"
import Menu from "./menu"
import { Container } from "semantic-ui-react"
import Footer from "./footer"

export default function About() {
    return (
        <div style={{ position: "relative", minHeight: 700 }}>
            <Container >
                <Header />
                <Menu />
                <br />
                <div style={{ width: 600 }} >
                    <h1>ABOUT US</h1>
                    <p>This is a Photography blog with the intent of displaying photos ranging from Nature,
                        Love,Cosmetics,Sports and Modeling categories.If you really Love any of those categories, do well to add your own photo providing the
                        category,the photo itself and a brief description of what inspired you to take such photo
                        which you would love the world to see.I hope you love it just as i do.....Happy viewing!
                    </p>
                </div>
            </Container>
            <br />
            <br />
            <Footer />
        </div>

    )
}