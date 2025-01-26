type ChangeMessagesProps = {
    handleMessage: (msg: string) => void;
};

const ChangeMessages = ({handleMessage}: ChangeMessagesProps) => {
    const messages = ["Oi", "Olá", "E aí, tudo bom?"];
    return (
        <div>
            <button onClick={()=>handleMessage(messages[0])}>1</button>
            <button onClick={()=>handleMessage(messages[1])}>2</button>
            <button onClick={()=>handleMessage(messages[2])}>3</button>
        </div>
    )
}

export default ChangeMessages