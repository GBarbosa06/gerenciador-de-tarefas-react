import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";


function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Descrição generica 1",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer compra",
      description: "Descrição generica 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Ler livros",
      description: "Descrição generica 3",
      isCompleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    setTasks(
      tasks.map(
        task => taskId === task.id ? {...task, isCompleted: !task.isCompleted} : task
      )
    )
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      <AddTask/>
      </div>
    </div>
  );
}

export default App;  
      