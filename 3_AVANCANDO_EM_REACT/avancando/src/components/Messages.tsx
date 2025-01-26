type MessagesProps = {
    msg: string; // Definir o tipo de `msg`
};

const Messages = ({msg}: MessagesProps) => {
    return (
        <div>
            <p>A mensagem é: {msg}</p>
        </div>
    )
}

export default Messages