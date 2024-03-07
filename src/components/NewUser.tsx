"use client";
import addUser from "@/lib/addUser";
import { stringify } from "querystring";
import { useState } from "react";

export default function Form(){

   

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
    })
    

    const handleChange = (event : any) => {
        const {type,name,value} = event.target 
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    //async function requeteAjoutNouvelUtilisateur () {
    //    return addUser(formData);
    //}

    return (
        <div>
            <form>
                <label> Nom :</label>
                <input
                    type = "text"
                    placeholder= "Entrez nom"
                    value = {formData.nom}
                    onChange = {handleChange}
                    name = "nom"
                    />
                <>  </>
                <label> Prénom :</label>
                <input
                    type = "text"
                    placeholder= "Entrez prenom"
                    value = {formData.prenom}
                    onChange = {handleChange}
                    name = "prenom"
                    />
                <>  </>
                <label> E-mail :</label>
                <input
                    type = "text"
                    placeholder= "Entrez email"
                    value = {formData.email}
                    onChange = {handleChange}
                    name = "email"
                    />
                <button onClick={() => addUser(formData)}> ajouter utilisateur</button>
            </form>
        </div>
    )
}