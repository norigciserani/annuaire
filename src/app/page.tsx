import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
import NewUser from "../components/NewUser";




export default async function Home() {

  


  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData

  

  const content = (
    <section>
      <br/>
      <table>
        <thead>
          <tr>
            <th>NOM</th>
            <th>PRENOM</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <th>{user.nom}</th>
              <th>{user.prenom}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <NewUser/>
      <br/>
      
    </section>
  )


  return content
}


