
import { useState } from 'react';
import './App.css';

function App() {
const [activity,setActivity]=useState("");
const [list,setList]=useState([])

const handleClick=()=>{
  // setList([...list,activity])
  // console.log(list)
  setList(list=>{
    const res=[...list,activity]
    console.log(res)
    setActivity("")
    return res;
  })
}

const handleDelete=(i)=>{
  const res=list.filter((ele,id)=>{
    return i!=id
  })
  setList(res)
 
}
  return (
    <div className="container">
		<h1>Todo List</h1>
		<div className="todo-input">
			<input 
      type="text" 
      placeholder="Enter task"
      value={activity}
      onChange={(e)=>setActivity(e.target.value)}
      />
			<button onClick={handleClick}>Add</button>
		</div>
    <ul className='todo-list'>
      {list!=[] && list.map((data,i)=>{
        return(
          <>
				<li key={i} className="todo-item">
          <div  >{data}</div>
          <div><button onClick={()=>handleDelete(i)}>Delete</button></div>
        </li>
				
        </>
        )
        
      })}
    
    </ul>
    </div>
  );
}

export default App;
