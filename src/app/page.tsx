import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
import NewUser from "../components/NewUser";
import { stringify } from "querystring";

let dateDuJour : string = "YYYY-MM-DD"

export default async function Home() {

  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData

  return (
    <section>
      <h1>{dateDuJour}</h1>
      <br/>
      <table>
        <thead>
          <tr>
            <th>NOM</th>
            <th>PRENOM</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <th>{user.nom}</th>
              <th>{user.prenom}</th>
              <th>{user.email}</th>
              <th><button>delete</button></th>
            </tr>
          ))}
        </tbody>
      </table>
      <NewUser/>
      <br/> 
    </section>
  )
}


