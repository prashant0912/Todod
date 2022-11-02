import { useState } from "react"
import { Todoinp } from "./todoinp"
import { TodoList } from "./todoList"
export const Todo = ()=>{
    const [data,setData] = useState([])
    const handle = (d)=>{
        setData([...data,d])
    }
    return (
    <div>
    <Todoinp value = {handle}/>
    <TodoList data = {data}/>

    </div>)
}