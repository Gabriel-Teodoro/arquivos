

const UserDetails = () => {
  const users = [
    { id: 1, name: "Gabriel", age: 29, work: "Programmer" },
    { id: 2, name: "Ana", age: 15, work: "Designer" },
    { id: 3, name: "Lucas", age: 32, work: "Data Scientist" },
  ];
  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <ul>
        {
          users.map((user)=>(
            <li key={user.id}> Nome: {user.name} - Idade: {user.age} - Profissão: {user.work}
            {user.age >= 18 ? (<p>Usuario pode tirar habilitação</p>) : (<p>Usuario não pode tirar habilitação</p>)}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserDetails