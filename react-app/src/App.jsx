import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

// ! adicionar prioridades
function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  //executa a função sempre que um valor dentro da lista é alterado

    useEffect(() => { //representa um banco de dados real, assim seria se passasse por uma API
    async function fetchTask(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      const data = await response.json();
      setTasks(data)
    }
    //fetchTask();
  }, []) // quando se passa uma lista vazia, o useEffect só carrega uma vez, na inicialização da aplicação

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
      <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] ">
          <Title>Gerenciador de Tarefas</Title>
        <div className="flex flex-col gap-3 mt-2"> {/* div dos componentes */}
          <AddTask onAddTaskSubmit={onAddTaskSubmit} />
          <Tasks tasks={tasks} onTaskClick={onTaskClick} onTrashClick={onTrashClick} />
        </div>
        </div>
      </div>
  );
}

export default App;  
      