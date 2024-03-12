"use client"
import AddRoom from "@/components/AddRoom";
import removeRoom from "@/lib/removeRoom";
import chambreDispo from "@/lib/chambreDispo";

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
            <th>NUMERO</th>
            <th>PRIX</th>
            <th>OCCUPATION</th>
            <th>BOITIER</th>
            <th>CODE</th>
            <th>TYPECHAMBRE</th>
            <th>DISPONIBILITE</th>
            <th>OPTIONS</th>
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
              <th><button onClick={() => removeRoom(chambre.numero , dateDuJour)}>🗑️</button></th>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <AddRoom/>
    </section>
  )
}


