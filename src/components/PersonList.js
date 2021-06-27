import { useState, useEffect } from "react"

const PersonList = () => {
    const [people,setPeople] = useState([])
    useEffect(()=>{
        
        setTimeout(()=>{document.body.style.backgroundColor="white"},0)
        setTimeout(()=>{
            document.body.style.backgroundColor="#333"
            document.body.style.color="white"
            setPeople([{name:"Joe"},{name:"John"},{name:"Susan",age:129}])
        },1500)
    },[])
    return (
        <>
        {people.length>0 ? (
        <ul>
            {people.map(person=>(
                <li>
                    Name: {person.name}
                    {person.age ? (<> Age: {person.age}</>): null}
                </li>
                
            ))}
        </ul>
        ) : null}
        </>
    )
}

export default PersonList