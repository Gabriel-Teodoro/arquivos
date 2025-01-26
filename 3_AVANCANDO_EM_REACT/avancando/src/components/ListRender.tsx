import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Gabriel", "Luana", "TTTESTE"])
    const [users] = useState([
        {id: 1, name: "Gabriel", age: 21}, 
        {id: 12, name: "Luana", age: 17}, 
        {id: 13, name: "TTTESTE", age: 121}
    ])
    const [usersPreviousState, setUsers] = useState([
        {id: 1, name: "Gabriel", age: 21}, 
        {id: 2, name: "Luana", age: 17}, 
        {id: 3, name: "TTTESTE", age: 121}
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        setUsers((pervUsers) => {
            return pervUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <h1>ListRender</h1>
        <ul>
            {
                list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))
            }
        </ul>
        <ul>
            {
                usersPreviousState.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))
            }
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender