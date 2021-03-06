import { useState } from "react"
import { Form, TextArea, Button, Container } from "semantic-ui-react"


export default function BlogPost({ onAddMeetup }) {

    const [Category, setCategory] = useState("")
    const [Image, setImage] = useState("")
    const [Desc, setDesc] = useState("")

    function handleCategory(event) {
        setCategory(event.target.value)
    }
    function handleImage(event) {
        setImage(event.target.value)
    }
    function handleDesc(event) {
        setDesc(event.target.value)
    }

    function submittedHandler(event) {
        event.preventDefault()


        const contactData = {
            category: Category,
            image: Image,
            desc: Desc
        }
        onAddMeetup(contactData)

    }

    return (
        <div >
            <Container >
                <h1 style={{ marginTop: 20 }}>Make a Post</h1>
                <Form style={{ marginTop: 20 }} onSubmit={submittedHandler} >
                    <Form.Input onChange={handleCategory} value={Category} label="Category" width={9} />
                    <Form.Input type="url" onChange={handleImage} value={Image} label="Image URL" width={9} />
                    <Form.Input onChange={handleDesc} value={Desc} control={TextArea} label="Description/Inspiration" width={9} />
                    <Button color="blue" content="Submit" />
                </Form>


            </Container>

        </div>

    )
}