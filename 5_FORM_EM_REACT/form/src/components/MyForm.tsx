import { useState } from 'react'
import './MyForm.css'

type User = {
    name: string;
    email: string;
    bio: string;
    role: string;
};

type MyFormProps = {
    user?: User; 
};
const MyForm = ({user}: MyFormProps) => {

    const [name, setName] = useState<string>(user ? user.name : "");
    const [email, setEmail] = useState<string>(user ? user.email: "");
    const [bio, setBio] = useState<string>(user ? user.bio: "");
    const [role, setRole] = useState<string>(user ? user.role: "");

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Enviando form");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
        <div>
            {/* 1-Criação de formulário */}
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type='text' name='name' placeholder='Digite o seu nome' 
                    onChange={handleName} value={name}/>
        </div>
        {/* 2-Label envolvendo input */}
        <div>
            <label>
                <span>E-mail:</span>
                <input type='email' name='email' placeholder='Digite o seu e-mail' 
                        onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </label>
        </div>
        <div>
            <label>
                <span>Bio:</span>
                <textarea name='bio' placeholder='Esse é a sua biografia' 
                        onChange={(e)=>setBio(e.target.value)} value={bio}/>
            </label>
        </div>
        <div>
            <label>
                <span>Função:</span>
                <select name='role'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}>
                    <option value="user">Usuários</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
        </div>
        <input type="submit" value="Enviar"/>
        </form>
        </div>
    )
}

export default MyForm