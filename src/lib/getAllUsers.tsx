import { error } from "console"

export default async function getAllUsers(){

    const res = await fetch("http://localhost:3000/api",{next : {revalidate : 60}})

    if (!res.ok) throw new Error('raté le fetch data')
    //faut utiliser le error boundaries dans la page si on mais pas try catch

    return res.json()
}