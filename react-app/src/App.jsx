import { useState } from "react";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";


function App(){
  const [message, setMessage] = useState("Olá");

  return(
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTask/>
    </div>
  );
}

export default App;