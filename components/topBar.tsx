import { ButtonAddColumn } from "@/components/buttonAddColumn";
import { ButtonEditBoard } from "@/components/buttonEditBoard";
import { ButtonDeleteBoard } from "@/components/buttonDeleteBoard";
import { BoardOption } from "@/components/boardOption";
// import { ModalAddColumn } from "@/components/modalAddColumn";
import { CgProfile } from "react-icons/cg";
import {Profil} from "@/components/profil"

export function TopBar() {
    return <>
        <div className="flex py-2 border-solid border-2 border-b-gray-300">
            <div className="w-1/2 pl-4 flex items-center"><span className="font-semibold text-2xl" >Soft Vodooz</span></div>          
            <div className="w-1/2">
                <div className="flex items-end justify-end mr-5">
                        
                    <BoardOption />
                    <Profil />
                    
                                 
                </div>             
            </div> 
        </div>
    </>
    
}