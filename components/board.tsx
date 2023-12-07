import { MdSpaceDashboard } from "react-icons/md";

export function Board({name} : {
    name: string;
}) {
    return <>
        
        <span className="py-4 pl-10 mb-2 flex rounded-l-full text-lg font-medium cursor-pointer bg-sky-100 hover:bg-sky-200 grown hover:text-blue-600">
                <span className="mt-1 mr-2"> <MdSpaceDashboard /> </span>
            {name}
        </span>
    </>
    
}