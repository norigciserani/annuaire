import getAllUsers from "../lib/getAllUsers";
import NewUser from "../components/NewUser";


export default async function Home() {

  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData

  return (
    <section>
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


