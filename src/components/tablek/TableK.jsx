
import NewContacts from "../newContacts/NewContacts"

const TableK = (props)=>{
    return(
        <>
      
        <tbody>
        {props.data?.map((items, i) =>{
            return(
                <NewContacts
                    key={i}
                    name={items.name}
                    lname={items.lname}
                    email={items.email}
                    number={items.number}
                />
            )
        })}
        </tbody>
    
        </>

    )
}
export default TableK