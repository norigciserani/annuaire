import chambreDispo from "@/lib/chambreDispo";
import Link from "next/link";
import { stringify } from "querystring";

let dateDuJour : string = "YYYY-MM-DD"

export default async function Home() {

  let dates = new Date(Date.now())
  let dateDuJour : string = dates.toISOString()
  dateDuJour = dateDuJour.split("T")[0]
  
  const chambresDisponibles : Promise<chambredispo[]> = chambreDispo(dateDuJour)
  const chambres = await chambresDisponibles

  return (
    <section>
      <br/>
      <table>
        <thead>
          <tr>
            <th>numero</th>
            <th>prix</th>
            <th>occupation</th>
            <th>boitier</th>
            <th>code</th>
            <th>typechambre</th>
            <th>disponibilite</th>
          </tr>
        </thead>
        <tbody>
          {chambres.map(chambre => (
            <tr>
              <th>{chambre.numero}</th>
              <th>{chambre.prix}</th>
              <th>{chambre.occupation}</th>
              <th>{chambre.boitier}</th>
              <th>{chambre.code}</th>
              <th>{chambre.typechambre}</th>
              <th>{chambre.disponibilite ? "✅️" : "❌"}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </section>
  )
}


