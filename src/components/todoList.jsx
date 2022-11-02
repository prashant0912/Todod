export const TodoList = ({data})=>{
    return (
        <div>
        {data.map((e)=>{
        return <div id = "list">
            {e}
            <img id = "image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kgqqq99WIG9YNx9c8fKxOYKh_yvHzw-thrgREPLtQngtUbKAunw0ugJiFpFiPUVvJ3Q&usqp=CAU " alt="" />
        </div>
    })}</div>
    )
}