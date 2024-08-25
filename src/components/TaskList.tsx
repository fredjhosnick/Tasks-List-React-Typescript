import Task from "./Task"

type ListTaskProps = {
    listTask:string[]
    deleteTask:(index:number) => void

}
export const TaskList = ({listTask,deleteTask}:ListTaskProps) => {
  return (
    <div>
      {listTask.map((task,index)=>(

        <Task key={index} task={task} deleteTask={()=>deleteTask(index)}/>

      ))}
    </div>
  )
}

export default TaskList
