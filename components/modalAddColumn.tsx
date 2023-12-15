import React from 'react'
import {useState} from 'react';
import {useRouter} from "next/navigation";
import { RiLoader3Fill } from "react-icons/ri";
import {Input} from "@/components/input";
import axios from "axios";
import {Button} from "@/components/button"
import { BASE_URL, PORT } from '@/api/utils/info';

import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';

export function ModalAddColumn({closeModal} : {
    closeModal: () => void;
}) {

  const router = useRouter()
  
      const handleModalClick = (event: React.MouseEvent) => {
        // Empêcher la propagation du clic vers la div sombre
        event.stopPropagation();
      };

      const [loading, setLoading] = React.useState(false);


      interface FormData {
        name: string;
      }

      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();

      async function onSubmit(data: FormData) {
        try {

            setLoading(true);

            const authToken = Cookies.get('authToken'); 

            // Vérifier si le token est présent
            if (!authToken) {
            console.error("Le token d'authentification est manquant.");
            // Gérer l'absence de token, par exemple, rediriger vers la page de connexion
            return; 
            }

            const config = {
              headers: {
                'Authorization': `Bearer ${authToken}`,
              },
            };

            // Faites la demande POST vers le backend avec axios
            const response = await axios.post(
              `${BASE_URL}:${PORT}/api/categories`,  
              {
                name: data.columnName
              },
              config
            );

            // console.log('Succès', response.data); 
            router.push('/kanban')

        } catch (error) {
            // Gérez les erreurs
            console.error("Erreur lors de la requête vers le backend :", error.response);
        } finally {
          // Mettez le chargement à false, que la soumission réussisse ou échoue.
          setLoading(false);
          closeModal();
        }
      }



  return <>
          <div onClick={closeModal} className="modal-overlay fixed inset-0 bg-slate-800 bg-opacity-50 flex items-center justify-center">
            
              <div className="modal-content rounded-md fixed bg-gray-100 px-8 pt-8 pb-5 text-slate-900 w-1/4" onClick={handleModalClick}>
                <div className="text-xl font-semibold mb-5">
                  Ajout de colonne
                </div>
                <p className="">
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="mb-1" htmlFor="columnName">
                      Nom de la colonne
                    </label>

                    <input
                      className="w-full h-12 px-5 border-solid border-2 border-gray-400 bg-gray-200 focus:border-blue-500 focus:shadow-none focus:bg-white mb-1 rounded"
                      id="columnName"
                      type="text"
                      placeholder="To do"
                      {...register("columnName", {required : true})}
                    />
                    {errors.columnName && <span className="text-red-500 text-xs">Column's name is required</span>}
                  </div>
                    
                    <div className="text-right mt-5">
                      <span 
                        onClick={closeModal}
                        className="bg-red-500 text-white py-[11px] px-4 hover:bg-red-600 rounded hover:cursor-pointer"
                      >
                        Annuler
                      </span>
                      <button className="text-white ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 relative">
                        {loading && <RiLoader3Fill className="animate-spin absolute left-1/2 top-1/2 " />}
                        Validate
                      </button>
                    
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
