import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";


export default async function Home() {


  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData

  

  const content = (
  <section>
      <h2>
          <Link href = "/">Accueil</Link>
          <br/>
          <Link href ="/users">Users</Link>
      </h2>
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
     
  </section>
)


return content
}


