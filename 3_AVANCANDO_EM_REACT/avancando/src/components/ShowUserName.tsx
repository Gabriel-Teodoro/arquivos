type ShowUserNameProps = {name: string;};

const ShowUserName = (props: ShowUserNameProps) => {
    return (
        <div>
            <h1>ShowUserName</h1>
            <h2>The user name is: {props.name}</h2>
        </div>
    )
}

export default ShowUserName