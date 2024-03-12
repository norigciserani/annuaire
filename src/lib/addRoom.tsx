import { error } from "console"

export default async function addRoom(newroom : any , date : string){
    console.log(newroom , date)
    const res = await fetch(`http://localhost:3000/api/add/chambredispo/${date}`, {
        method : 'POST',
        body: JSON.stringify(newroom),
      })  
}