import { Board } from "@/components/board"
import { ButtonAddBoard } from "@/components/buttonAddBoard";
import { FiLogOut } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

export function SideNav() {
    return <>
        <div className="flex flex-col h-full bg-slate-800">
            <div className="h-3/5">
                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold text-slate-100 text-3xl my-10">My KanBan</span>
                    <span className="font-medium text-slate-100 text-md mb-5">All Boards (3)</span>
                </div>
                <div className="flex flex-col">                
                    <span 
                        className="py-4 pl-10 mb-2 text-lg font-medium rounded-l-full flex cursor-pointer bg-blue-600 text-slate-100">
                        <span className="mt-1 mr-2"> <MdSpaceDashboard /> </span>
                        Soft Vodooz
                    </span>
                    <Board name="Sam Project" />
                    <Board name="Mat Project" />
                    
                </div>
            </div>
            <div className="h-2/5">
                <div className="flex flex-col items-center mt-12">
                    <ButtonAddBoard
                        buttonClassName="text-slate-100 rounded-full py-3 px-8 bg-blue-700 hover:bg-blue-800" 
                        text="Add Board +"
                    />
                </div>
                <div className="flex flex-col items-center pt-10 pb-10">

                    <button 
                        className="flex text-slate-100 px-5 rounded-sm hover:bg-sky-200 font-semibold hover:text-slate-900"
                    >
                        Log out <span className="mt-1 ml-2"><FiLogOut /></span>
                    </button>
                            
                </div>
            </div>
        </div>
    </>
}