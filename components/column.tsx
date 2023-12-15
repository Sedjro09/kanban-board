import { ButtonDeleteColumn } from "./buttonDeleteColumn";
import { Task } from "./task";

export function Column({name, idCategorie} : {
    name: string;
    idCategorie; string;
}) {
    return <>
        <div className="flex-shrink-0 w-72 flex flex-col m-5">               

            <div className="min-h-full  rounded-md p-[1px] bg-gray-200">
                <div className="flex py-3 px-5 bg-slate-700 rounded-t-md">
                    <div className="w-2/3 flex items-center text-slate-100 text-xl font-semibold">   
                        {name}
                    </div>
                    <div className="w-1/3 flex justify-end">   
                        <ButtonDeleteColumn 
                            buttonClassName="py-2 px-2 text-2xl font-semibold rounded-full text-slate-100 hover:text-slate-700 hover:bg-slate-100"
                            idCategorie={idCategorie} 
                            nameCategorie={name}
                        />
                    </div>
                    
                </div>

                <div className="border-solid border-2 border-gray-300">

                    {/* <Task /> */}

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
            {/* {id} */}
        </div>
        
        
    </>
}