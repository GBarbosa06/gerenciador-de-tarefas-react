import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";


function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Descrição genérica 1",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Fazer compra",
      description: "Descrição genérica 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Ler livros",
      description: "Descrição genérica 3",
      isCompleted: false,
    }
  ]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  function onTaskClick(taskId) {
    setTasks(
      tasks.map(
        task => taskId === task.id ? {...task, isCompleted: !task.isCompleted} : task
      )
    )
  }
  function onTrashClick(taskId) {
    setTasks(taskList => taskList.filter(task => task.id !== taskId));
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

      <div className="flex flex-col gap-3 mt-2">
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTrashClick={onTrashClick} />
      </div>

      </div>
    </div>
  );
}

export default App;  
      