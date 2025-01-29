import { useState } from 'react';
import './App.css'

function App() {

  const [tasks, setTasks] = useState ([
    {
      id: 0,
      task: "eat breakfast",
      completed: true,
    },
    {
      id: 1,
      task: "eat lunch",
      completed: false,
    },
    {
      id: 2,
      task: "eat dinner",
      completed: false,
    }
  ]);

  return (
    <>
    <header className='mainHeader'><h1>Todo List</h1></header>
    <main>
      <form id='inputForm' onSubmit={(e) => {
        e.preventDefault();
        const newTask = document.getElementById("taskInput").value;
        setTasks([...tasks, {
          id: tasks[tasks.length-1].id + 1,
          task: newTask,
          completed: false,        
        }])
      }}>
        <input type="text" id="taskInput" />
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {tasks.map((item) => 
        {
          return(
          <li key={item.id}>{item.task} <span>
            
            <input type='checkbox' checked={item.completed} onChange={() => 
            {
            setTasks(tasks.map((task) => {
              if(task.id === item.id) {
                console.log(tasks)
                task.completed = !task.completed
              }
              return task;
            }))
          }}/></span>
            <button onClick={() => {
              setTasks(
                tasks.filter((tasks) => {
                  if (tasks.id === item.id) {
                    return false;
                  } else {
                    return true;
                  }
                })
              )
            }}>delete</button>
          </li>)
        })}

      </ul>
    </main>
    </>
    
  )
}

export default App
