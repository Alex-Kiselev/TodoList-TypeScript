import React from 'react'
import { ITask } from '../interfaces'

interface Props {
   task: ITask;
   deleteTask(taskName:string): void;
}


const TodoTask = ({task, deleteTask}:Props) => {
  return (
    <div className='task'>
       <div className='content'>
          <span>{task?.taskName}</span>
          <span>{task?.deadline}</span>
       </div>
       <button onClick={()=> {deleteTask(task?.taskName)}}>x</button>
       </div>
  )
}

export default TodoTask
