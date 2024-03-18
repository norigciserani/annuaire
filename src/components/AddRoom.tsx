"use client";
import addRoom from "@/lib/addRoom";
import { Button, Card, Checkbox, Select } from "@material-tailwind/react";
import { stringify } from "querystring";
import { MouseEventHandler, useEffect, useState } from "react";


type Chambre = {
    "id" : number,
    "numero" : string,
    "prix" : number,
    "occupation" : number,
    "boitier" : string,
    "code": string,
    "typechambre": string,
    "disponibilite" : boolean
}

type ResponseAdd = {
    message: string,
    data: Chambre | undefined
}

export default function Form(props: any){

    const formAtZero = {
        numero : "",
        prix : 60,
        occupation : 2,
        boitier : "",
        code : "",
        typechambre : "",
        disponibilite : true,
    }

    const [formData, setFormData] = useState(formAtZero)
    const [loading, setLoading] = useState(false)
    const [typesChambre, setTypesChambre] = useState(Array<string>)

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

    useEffect(() => {
        fetchTypeChambre()
    }, [])
    const fetchTypeChambre = async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/typedechambre`, {
                cache: 'no-store',
                headers: {
                    Accept: "application/json",
                    method: "GET"
            }})
            if (response) {
                const data: string[] = await response.json()
                console.log(data)
                setTypesChambre(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

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
        const newRoom: ResponseAdd = await addRoom(formData , dateDuJour)
        props.onAdd([...props.onState, newRoom.data])
        setFormData(formAtZero)
    }

    return (
        <Card color="transparent" shadow={false}>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col">
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
                    value={formData.typechambre}
                    onChange={handleChange}
                    name={"typechambre"}
                    >
                        <option value=""></option>
                        {typesChambre.map(typeChambre => (
                            <option value={typeChambre} key={typeChambre}>{typeChambre}</option>
                        ))}
                    </select>
                    
                {/* <input
                    type = "text"
                    placeholder= "Entrez typechambre"
                    value = {formData.typechambre}
                    onChange = {handleChange}
                    name = "typechambre"
                    /> */}

                {/* <label> Disponibilité :</label>
                <input
                    type = "checkbox"
                    checked = {formData.disponibilite}
                    onChange = {handleChange}
                    name = "disponibilite"
                    /> */}

                <Checkbox
                    label="Disponible"
                    checked={formData.disponibilite}
                    onChange={handleChange}
                    name="disponibilite"
                />
                <Button onClick={requeteAjoutNouvelleChambre}> ajouter chambre</Button>
                </div>
            </form>
        </Card>
    )
}