import { error } from "console"

export default async function removeRoom(chambre: string , dateDuJour : string){

    const res = await fetch(`/api/delete/chambredispo/${dateDuJour}/${chambre}`, {
        method : 'DELETE', 
      })
}