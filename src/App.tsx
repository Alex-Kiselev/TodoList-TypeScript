import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import {ITask} from './interfaces'


const App: FC = () => {

   const [task, setTask] = useState<string>('');
   const [deadline, setDeadline] = useState<number>(0);
   const [todo, setTodo] = useState<ITask[]>([]);

   

   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      if(e.target.name === 'task') {
         setTask(e.target.value)
      } else {
         setDeadline(+e.target.value)
      }
   };

   const addTask = (): void => {
   const newTask = {taskName:task, deadline: deadline}
   setTodo([...todo, newTask])
   setTask('')
   setDeadline(0)
   }




  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input value={task} name="task" onChange={handleChange}  type="text" placeholder="вводите" />
          <input value={deadline} name="deadline" onChange={handleChange} type="number" placeholder="Дедлайн" />
        </div>
        <button onClick={addTask}>Жмяк</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
