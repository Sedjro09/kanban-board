"use client"
import { useState, useEffect } from "react"
import axios from 'axios';
import {createPortal} from "react-dom"
import { ModalAddColumn } from "@/components/modalAddColumn"
import { Column } from "@/components/column"
import { BASE_URL, PORT } from '@/api/utils/info'; 

// import { RiDeleteBin6Line } from "react-icons/ri";

import Cookies from 'js-cookie';

export function ColumnList() {

    const [showModal, setShowModal] = useState(false)
    const [categories, setCategories]= useState([])

    async function getColumns() {
        try {
          // Récupérer le token d'authentification du localStorage (ou d'où vous le stockez)
          const authToken = Cookies.get('authToken'); // Assurez-vous de stocker le token lors de l'authentification
      
          // Vérifier si le token est présent
          if (!authToken) {
            console.error("Le token d'authentification est manquant.");
            // Gérer l'absence de token, par exemple, rediriger vers la page de connexion
            return; 
          }
      
          // Configurer les options de la requête avec le token d'authentification
          const config = {
            headers: {
              'Authorization': `Bearer ${authToken}`,
            },
          };
      
          // Effectuer la requête GET vers le backend pour récupérer les catégories
          const response = await axios.get(`${BASE_URL}:${PORT}/api/categories`, config);
      
          // Récupérer les données de la réponse
          setCategories(response.data)      
          // Faire quelque chose avec les catégories, par exemple, les afficher dans la console
          // console.log('Catégories récupérées avec succès :', categories);
          
        } catch (error) {
          // Gérer les erreurs, par exemple, afficher une erreur dans la console
          console.error("Erreur lors de la récupération des catégories :", error);
      
          // Vous pouvez choisir de rejeter l'erreur pour la traiter en aval, si nécessaire
          throw error;
        }
    }

    useEffect(()=> {
      getColumns()
    }, [])

    return <>
        <div className="flex overflow-x-auto h-full bg-gray-50">

               

            {categories && categories.map((categorie) => {
                return (
                    <Column key={categorie.idCategorie} idCategorie={categorie.idCategorie} name={categorie.name} />
                );
            } )}


            <div className="flex-shrink-0 w-72 flex flex-col m-5"> 
                <div  
                    onClick={() => setShowModal(true)}
                    className="flex flex-col justify-center items-center h-full border-solid border-2 border-gray-300 rounded-md p-3 bg-gray-300 text-gray-500 hover:bg-gray-400 hover:cursor-pointer hover:text-slate-900"
                >
                    <span className="text-2xl font-semibold">
                      + New Column 
                    </span>      
                </div>     
            </div>
        </div>
        { showModal && createPortal(<ModalAddColumn closeModal={()=>setShowModal(false)} />, document.body) }
    </>
}