import { BoardOption } from "@/components/boardOption";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export function TopBar() {
    return <>
        <div className="flex py-2 border-solid border-2 border-b-gray-300">
            <div className="w-1/2 pl-4 flex items-center"><span className="font-semibold text-2xl" >Soft Vodooz</span></div>          
            <div className="w-1/2">
                <div className="flex items-center justify-end mr-5">
                        
                    <BoardOption />
                    
                    <div>
                        <Link href="/profile"> 
                            <span 
                                className="text-3xl text-gray-600 mt-0"
                            >
                                    <CgProfile />
                            </span>
                        </Link> 
                    </div> 
                    


                    
                                 
                </div>             
            </div> 
        </div>
    </>
    
}