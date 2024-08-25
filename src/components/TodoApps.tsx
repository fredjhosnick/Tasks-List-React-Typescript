import { useState } from "react"
import TaskList from "./TaskList"

const TodoApps = () => {

   const [newTask, setNewTask] = useState<string>('')
   const [listTask, setListTask] = useState<string[]>([])
   

   const handleAddTask = ()=>{
    if(newTask.trim()=== '') return
    setListTask(previewsTasks =>[... previewsTasks,newTask])
    setNewTask('')


   }

   const handleDeleteTask = (index:number)=>{
      setListTask(tasks => tasks.filter((_,i)=> i !==index))
   }
  return (
    <div>
      <h1>Tasks List</h1>
      <div>
        <input 
        type="text"
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
        placeholder="New Task"        
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList listTask={listTask}  deleteTask={handleDeleteTask} />
    </div>
  )
}

export default TodoApps
