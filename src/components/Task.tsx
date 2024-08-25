type Taskprops = {
    task:string
    deleteTask:()=> void
}
const Task = ({task, deleteTask}:Taskprops) => {
  return (
    <div className="task">
        <span>{task}</span>
        <button onClick={deleteTask}>Delete</button>
      
    </div>
  )
}

export default Task
