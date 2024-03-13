import { error } from "console"

export default async function chambreDispo(date : string){

    const res = await fetch(`http://localhost:3000/api/chambredispo/${date}`,{cache: 'no-store'})

    if (!res.ok) throw new Error('Fetch /api/chambredispo/[date] failed in file /lib/chambreDispo.tsx')
    //faut utiliser le error boundaries dans la page si on mais pas try catch

    return res.json()
}