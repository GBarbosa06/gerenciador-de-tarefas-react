import {CheckIcon, ChevronRightIcon, TrashIcon} from "lucide-react"
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks, onTaskClick, onTrashClick}) {
    const navigate = useNavigate(); // ? usado para mudar de páginas, cuja as páginas e paths definidos no index.html

    function onSeeDetailsClick(task){
        const query = new URLSearchParams(); // ? query para evitar erros de digitação na url
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
    }
    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {
                tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button onClick={() => onTaskClick(task.id)} className={`w-full text-left flex items-center gap-2 bg-slate-400 text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                            {task.isCompleted && <CheckIcon />}
                            {task.title}
                        </button>
                        <Button onClick={() => onSeeDetailsClick(task)}>
                            <ChevronRightIcon />
                        </Button>
                        <Button onClick={() => onTrashClick(task.id)}>
                            <TrashIcon /> 
                        </Button>
                    </li>
                ))
            }
        </ul>
    );
}
export default Tasks;