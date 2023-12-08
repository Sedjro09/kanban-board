// import { MdOutlineAddBox } from "react-icons/md";
import { ButtonAddTask } from "@/components/buttonAddTask";

export function Column({name, color} : {
    name: string;
    color: string;
}) {
    return <>
        <div className="flex-shrink-0 w-72 flex flex-col m-5">   
            <div className="flex mb-3">
                <div className="w-2/3">
                    <span 
                        className={`font-medium bg-${color}-500 bg-opacity-75 px-2 py-1 text-white rounded-full mr-2`} 
                        
                    > 
                        {name}
                    </span> 
                    (3 tâches)
                </div>
            
                <div className="w-1/3 text-right flex items-center justify-end hover:cursor-pointer" >   
                    <ButtonAddTask text="Task" buttonClassName="flex p-1 bg-gray-300 hover:bg-sky-200 rounded" />
                </div>

            </div>

            <div className="min-h-full border-solid border-2 border-gray-300 rounded-md p-[1px] bg-gray-200">
                <div className="bg-gray-100 cursor-grab shadow-lg p-3 rounded-lg mx-3 mt-3">
                    <div className="text-slate-700 font-semibold text-base mb-2">Modélisation de la base de données</div>
                    <p className="text-slate-600 font-light text-xs">Faire les graphes qui feront ressortir toutes les fonctionnalités à implémenter.</p>                   
                    <div className="text-right mt-1">
                        <span className=" px-2 py-1 rounded font-medium bg-slate-500 text-slate-100 text-xs">Added by : Sedjro</span>
                    </div>
                </div>

                <div className="bg-gray-100 cursor-grab shadow-lg p-3 rounded-lg mx-3 mt-3">
                    <div className="text-slate-700 font-semibold text-base mb-2">Modélisation de la base de données</div>
                    <p className="text-slate-600 font-light text-xs">Faire les graphes qui feront ressortir toutes les fonctionnalités à implémenter.</p>                   
                    <div className="text-right mt-1">
                        <span className=" px-2 py-1 rounded font-medium bg-slate-500 text-slate-100 text-xs">Added by : Sedjro</span>
                    </div>
                </div>
                
            </div>     
        </div>
        
        
    </>
}