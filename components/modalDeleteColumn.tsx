import React from 'react';
import {useState} from 'react';
import {useRouter} from "next/navigation";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { BASE_URL, PORT } from '@/api/utils/info';
import {Button} from "@/components/button";

import Cookies from 'js-cookie';


export function ModalDeleteColumn({closeModal, idCategorie, nameCategorie} : {
    closeModal: () => void;
    idCategorie: string;
    nameCategorie: string
}) {

      const [loading, setLoading] = React.useState(false);

      const router =useRouter();

      const handleModalClick = (event: React.MouseEvent) => {
        // Empêcher la propagation du clic vers la div sombre
        event.stopPropagation();
      };

      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

      async function onSubmit() {
        try {

          setLoading(true);

          const authToken = Cookies.get('authToken'); 
            // Vérifier si le token est présent
          if (!authToken) {
            console.error("Le token d'authentification est manquant.");
            // Gérer l'absence de token, par exemple, rediriger vers la page de connexion
            return; 
          }

          const response = await axios.delete(
            `${BASE_URL}:${PORT}/api/categories/${idCategorie}`,
            {
              headers : {
                'Authorization': `Bearer ${authToken}`,
              },
            }
          )

          // console.log('Succès', response.data); 
          
          // router.push('/kanban')

        } catch (error) {
          console.error("Erreur lors de la requête vers le backend :", error.response)
        } finally {
          setLoading(false);
          closeModal()
        }
      }


      return <>
        <div onClick={closeModal} className="modal-overlay fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center">
          
            <div className="modal-content rounded-md fixed bg-gray-100 px-8 pt-8 pb-5 text-slate-900 w-1/4" onClick={handleModalClick}>
              <div className="text-xl font-semibold mb-5">
                Suppression de colonne
              </div>
              <p className="">
                
                  Voulez-vous vraiment supprimer la colonne "{nameCategorie}" ?
                  
                  <div className="text-right mt-5">
                      <form onSubmit={handleSubmit(onSubmit)}>
                         
                        <span 
                          onClick={closeModal}
                          className="bg-red-500 text-white py-[11px] px-4 hover:bg-red-600 rounded hover:cursor-pointer"
                        >
                          Annuler
                        </span>
                        <button className="text-white ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 relative">
                          {/* {loading && <RiLoader3Fill className="animate-spin absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />} */}
                          Delete
                        </button>
                      </form>
                  </div>
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
