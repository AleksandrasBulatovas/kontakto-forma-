

const NewContacts = (props) =>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.lname}</td>
            <td>{props.email}</td>
            <td>{props.number}</td>
        </tr>

    )
}
export default NewContacts