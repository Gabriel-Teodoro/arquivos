type ExecuteFunctionProps = {
    myFunction: () => void;
};
const ExecuteFunction = ({myFunction}: ExecuteFunctionProps) => {
    return (
        <div>
            <button onClick={myFunction}>Executa função</button>
        </div>
    )
}

export default ExecuteFunction