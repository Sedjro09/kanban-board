import React from 'react'
import {useState} from 'react';
import {Input} from "@/components/input";
import {Button} from "@/components/button"

export function ModalAddUser({closeModal} : {
    closeModal: () => void;
}) {

      const [user, setUser] = useState("")

      const handleModalClick = (event: React.MouseEvent) => {
        // Empêcher la propagation du clic vers la div sombre
        event.stopPropagation();
      };


      return <>
      <div onClick={closeModal} className="modal-overlay fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center">
        
          <div className="modal-content rounded-md fixed bg-gray-100 px-8 pt-8 pb-5 text-slate-900 w-1/4" onClick={handleModalClick}>
            <div className="text-xl font-semibold mb-5">
              Ajout d'utilisateur
            </div>
            <p className="">
              <form>
                <Input label="Choisissez un utilisateur" type="text" placeholder="Soft Vodooz" value={user} onChange={(e: Event) => setUser(e.target.value)} />
                
                <div className="text-right mt-5">
                  <Button 
                    text="Annuler"
                    onClick={closeModal}
                    buttonClassName="bg-red-500 text-white py-2 px-4 hover:bg-red-600 rounded-sm"
                  />
                  <Button 
                    text="Ajouter"
                    onClick={() => null}
                    buttonClassName="bg-blue-500 ml-5 text-white py-2 px-4 hover:bg-blue-600 rounded-sm"
                  />
                
                </div>
              </form>  
            </p>

            
            
            <button 
              onClick={closeModal}
              
              className="absolute top-1 right-1 w-7 h-7 bg- rounded bg-gray-200"
            >
              X
            </button>
            
            
          </div>
        
      </div>
    </>
      

  }
