import {useState} from "react"
export const Todoinp = ({value})=>{

    const [text,setText] = useState("")
    return <div>
        <h1 id = "head">Todo App</h1>
        <input className ="inputbox" onChange ={(e)=>{
            setText(e.target.value)
        }} type="text" placeholder = "Add Todo" />
        <button className = "addbutt"onClick = {()=>{
            value(text)
        }}>+</button>

    </div>
}