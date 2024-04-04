import './App.css';
import { Task } from './Task.js'
import { useState } from 'react';

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: taskInput,
      completed: false,
    };
    console.log(task);
    taskInput !== "" && setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const markTaskComplete = (id) => {
    setTodoList(currentTodoList => {
      const updatedTodoList = [...currentTodoList];
      updatedTodoList[id - 1].completed = true;

      return updatedTodoList;
    });
  }

  return (
    <>
      <div className="addTask">
        <input onChange={handleTaskInputChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task id={task.id}
                  taskName={task.taskName} 
                  completed={task.completed} 
                  deleteTask={deleteTask} 
                  markTaskComplete={markTaskComplete}
            />
          );
        })}
      </div>
    </>
  );

}

export default App;