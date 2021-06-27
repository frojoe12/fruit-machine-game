import React, {useState, useEffect} from "react"


const Hooks = () => {
    const [counter,setCounter] = useState('-')

const UPDATE_VALUE = (c) => c + ' -'
return (
    <div onClick={()=>{
        setTimeout(()=>{setCounter(UPDATE_VALUE)},0)
        setTimeout(()=>{setCounter(UPDATE_VALUE)},500)
        setTimeout(()=>{setCounter(UPDATE_VALUE)},1000)

    }}>Hooks
        <br />
        {counter}
        <hr />
    </div>
)
}

export default Hooks