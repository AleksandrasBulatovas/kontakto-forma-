import { useState } from "react";
import {Card,  Button} from "react-bootstrap";
import TableK from "../tablek/TableK";
import AddContact from "../addContact/AddContact";
import { Table } from "react-bootstrap"



const NewContact = ()=>{

    const [addContact, setAddContact] = useState(false)
    const [newContact, setNewContact] = useState([])

    const saveNewContactHandler = (data)=>{
        setNewContact((prevData)=>{
            return [data, ...prevData]
        })
        setAddContact(false)
    }

    return(
        <>
    
         <Table striped bordered hover>
        <thead>
            <tr>
                <th>Vardas</th>
                <th>Pavarde</th>
                <th>Email</th>
                <th>Tel. Numeris</th>
            </tr>
        </thead>
         <TableK data={newContact}/>
         </Table>
         {(addContact) && <AddContact onSave={saveNewContactHandler}/>}
            <Card className="text-center">
                <Card.Body>             
                    <Card.Title>Kontaktu Generatorius</Card.Title>
                    <Card.Text>
                        Noredami ivesti nauja kontakta spauskite "Naujas Kontaktas"
                    </Card.Text>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button variant="primary" onClick={()=>setAddContact(true)}>Naujas kontaktas</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default NewContact