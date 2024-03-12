import { error } from "console"

export default async function addUser(newuser: any){

    const res = await fetch("http://localhost:3000/api/create", {
        method : 'POST',
        body: JSON.stringify(newuser),
      })  
}