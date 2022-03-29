import React, { FC, useState } from "react";
import "./App.css";

const App: FC = () => {

   const [task, setTask] = useState<string>('');
   const [deadline, setDeadline] = useState<number>(0);
   const [todo, setTodo] = useState([]);





  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input  type="text" placeholder="вводите" />
          <input type="number" placeholder="вводите" />
        </div>
        <button>Жмяк</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
