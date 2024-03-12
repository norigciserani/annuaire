"use client";
import addRoom from "@/lib/addRoom";
import { stringify } from "querystring";
import { MouseEventHandler, useState } from "react";



export default function Form(){

    const [formData, setFormData] = useState({
        numero : "",
        prix : 60,
        occupation : 2,
        boitier : "",
        code : "",
        typechambre : "",
        disponibilite : true,
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

    async function requeteAjoutNouvelleChambre (event: any) {
        event.preventDefault()

        let date = new Date(Date.now())
        let dateDuJour : string = date.toISOString()
        dateDuJour = dateDuJour.split("T")[0]

        return addRoom(formData , dateDuJour);
    }

    return (
        <div>
            <form>
                <label> Numero :</label>
                <input
                    type = "text"
                    placeholder= "Entrez numero"
                    value = {formData.numero}
                    onChange = {handleChange}
                    name = "numero"
                    />
                <>  </>
                <label> Prix :</label>
                <input
                    type = "text"
                    placeholder= "Entrez prix"
                    value = {formData.prix}
                    onChange = {handleChange}
                    name = "prix"
                    />
                <>  </>
                <label> Occupation :</label>
                <input
                    type = "text"
                    placeholder= "Entrez occupation"
                    value = {formData.occupation}
                    onChange = {handleChange}
                    name = "occupation"
                    />
                <>  </>
                <label> Boitier :</label>
                <input
                    type = "text"
                    placeholder= "Entrez boitier"
                    value = {formData.boitier}
                    onChange = {handleChange}
                    name = "boitier"
                    />
                <>  </>
                <label> Code :</label>
                <input
                    type = "text"
                    placeholder= "Entrez code"
                    value = {formData.code}
                    onChange = {handleChange}
                    name = "code"
                    />
                <>  </>
                <label> Typechambre :</label>
                <input
                    type = "text"
                    placeholder= "Entrez typechambre"
                    value = {formData.typechambre}
                    onChange = {handleChange}
                    name = "typechambre"
                    />
                <>  </>
                <label> Disponibilité :</label>
                <input
                    type = "checkbox"
                    checked = {formData.disponibilite}
                    onChange = {handleChange}
                    name = "disponibilite"
                    />
                <button onClick={requeteAjoutNouvelleChambre}> ajouter chambre</button>
            </form>
        </div>
    )
}