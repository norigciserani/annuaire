"use client"
import AddRoom from "@/components/AddRoom";
import deleteRoom from "@/lib/removeRoom"
import chambreDispo from "@/lib/chambreDispo";
import { useEffect, useState } from "react";
import { Button, Card, Typography} from "@material-tailwind/react";
import { listenerCount } from "process";

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

export default function Home() {
    const [loading, setLoading] = useState(false)
    
    const THEAD = ["NUMERO",
        "PRIX",
        "OCCUPATION",
        "BOITIER",
        "CODE",
        "TYPECHAMBRE",
        "DISPONIBILITE",
        "OPTIONS"
    ]

    const [listChambre, setListChambre] = useState(Array<Chambre>)
    useEffect(() => {
        fetchChambres()
    }, [])
    const fetchChambres = async () => {
        let dates = new Date(Date.now())
        let date : string = dates.toISOString()
        date = date.split("T")[0]
        try {
            setLoading(true)
            const response = await fetch(`/api/chambredispo/${date}`, {
                cache: 'no-store',
                headers: {
                    Accept: "application/json",
                    method: "GET"
            }})
            if (response) {
                const data = await response.json()
                console.log(data)
                setListChambre(data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }



    const removeRoom = async (roomNumber: string) => {
        let dates = new Date(Date.now())
        let date : string = dates.toISOString()
        date = date.split("T")[0]
        const response = await deleteRoom(roomNumber , date)
        console.log(response.data)
        // On setListChambre à la listChambre sans les éléments renvoyé par l’api
        setListChambre(listChambre.filter(chambre => chambre.numero != roomNumber))
    }
    return (
        <section>
            <br/>
            <Button onClick={fetchChambres}>LOAD DATA</Button>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {THEAD.map((element) => (
                                <th
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    key={element}
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {element}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {listChambre.map((chambre, index) => {
                            const isLast = index === listChambre.length - 1;
                            const classes = "p-4 border-b border-blue-gray-50"
                            return (
                                <tr key={chambre.id}>
                                    <td className={classes}>{chambre.numero}</td>
                                    <td className={classes}>{chambre.prix}</td>
                                    <td className={classes}>{chambre.occupation}</td>
                                    <td className={classes}>{chambre.boitier}</td>
                                    <td className={classes}>{chambre.code}</td>
                                    <td className={classes}>{chambre.typechambre}</td>
                                    <td className={classes}>{chambre.disponibilite ? "✅️" : "❌"}</td>
                                    <td className={classes}><button onClick={() => removeRoom(chambre.numero)}>🗑️</button></td>
                                </tr>
                        )})}
                    </tbody>
                </table>
            </Card>
            <br/>
            <AddRoom onState={listChambre} onAdd={setListChambre} />
        </section>
    )
}


