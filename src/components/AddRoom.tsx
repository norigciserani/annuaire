"use client";
import addRoom from "@/lib/addRoom";
import { stringify } from "querystring";
import { FunctionComponent, MouseEventHandler, useState , useEffect } from "react";
import getTypeChambre from "@/lib/getTypeChambre";
import { array } from "zod";


//export const Form: FunctionComponent<typeChambreProps> = (props) => {
export default function Form(props : any){

    //le probleme c'est qu'on importe un props qui n'a aucun type mais si on veut l'utiliser, faut qu'il soit du type string[]


    const [formData, setFormData] = useState({
        numero : "",
        prix : 60,
        occupation : 2,
        boitier : "",
        code : "",
        typechambre : "",
        disponibilite : false,
    })
    
    const handleChange = (event : any) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prevState => {
            return{
                ...prevState,
                [name]: newValue
            }
        });
    };

   /* async function typesdechambre() {
        const typesdechambresData : Promise<string[]> = getTypeChambre()
        const typedechambres = await typesdechambresData
    }*/

    const [typesChambre , setTypesChambre] = useState(Array<string>)

    useEffect(() => {
    // Code here will run after *every* render
        fetchTypeChambre()
    }, []);

    async function fetchTypeChambre(){
        const typesdechambresData : Promise<string[]> = getTypeChambre()
        setTypesChambre(await typesdechambresData)
    }

    async function requeteAjoutNouvelleChambre () {

        let date = new Date(Date.now())
        let dateDuJour : string = date.toISOString()
        dateDuJour = dateDuJour.split("T")[0]

        const res = await addRoom(formData , dateDuJour);
        if (res.message == "ok"){
            res.chambredispo
            props.chambres.push(res.chambres)
            props.setChambres(props.chambres)
            //props.setChambres([...props.chambres, res.chambres])  
            }
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
                    type = "number"
                    placeholder= "Entrez prix"
                    value = {formData.prix}
                    onChange = {handleChange}
                    name = "prix"
                    />
                <>  </>
                <label> Occupation :</label>
                <input
                    type = "number"
                    placeholder= "Occupation"
                    value = {formData.occupation}
                    onChange = {handleChange}
                    name = "occupation"
                    />
                <>  </>
                <label> Boitier :</label>
                <select 
                    value = {formData.boitier}
                    onChange = {handleChange}
                    name="boitier"
                    >
                    <option value="A">boitier A</option>
                    <option value="B">boitier B</option>
                </select>
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
                <select 
                    value = {formData.typechambre}
                    onChange = {handleChange}
                    name="typechambre"
                    >
                    {typesChambre.map(typechambre => (
                        <option value={typechambre}>{typechambre}</option>
                    ))}
                </select>
                <>  </> 
                <label> Disponibilité :</label>
                <input
                    type = "checkbox"
                    checked = {formData.disponibilite}
                    onChange = {handleChange}
                    name = "disponibilite"
                    />
                <>  </>
                <button onClick  = {() => requeteAjoutNouvelleChambre}> ajouter chambre </button>
            </form>
        </div>
    )
}