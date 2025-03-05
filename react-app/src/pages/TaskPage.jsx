import { useNavigate, useSearchParams } from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react"

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description")

    const navigate = useNavigate();



    return(
    <div className="w-screen h-screen bg-slate-500 p-6">

        <div className="flex justify-center relative mb-6">
        <button onClick={() => navigate('/')} className="absolute left-0 text-white bg-slate-600 w-7 h-7 rounded-full">
            <ChevronLeftIcon />
        </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefa</h1>
        </div>
        
        <div className="bg-slate-200 p-4 rounded-md mt-5">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-600">{description}</p>
        </div>
    </div>
    )
}

export default TaskPage;