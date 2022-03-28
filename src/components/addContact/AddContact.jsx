import { useState } from "react";
import {Card, Form, Button} from "react-bootstrap";

const AddContact = (props) =>{
    const [items, setItems] = useState({
        name:'',
        lname:'',
        email:'',
        number:''
    })

    const handleChange = (e)=>{
        setItems({
            ...items,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        props.onSave(items)
    }
    return(
        <>
            <Card>
                <Card.Header>
                    Suveskite Duomenis
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler} >
                        <Form.Group>
                            <Form.Label>Vardas</Form.Label>
                            <Form.Control type="text" name="name" value={items.name} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Pavarde</Form.Label>
                            <Form.Control type="text" name="lname" value={items.lname} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" value={items.email} onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tel. Numeris</Form.Label>
                            <Form.Control type="text" name="number" value={items.number} onChange={handleChange}/>
                        </Form.Group>
                        <Button type='submit'>Issaugoti</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
export default AddContact