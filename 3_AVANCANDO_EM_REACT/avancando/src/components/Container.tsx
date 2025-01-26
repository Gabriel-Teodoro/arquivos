type ContainerProps = {
    children: React.ReactNode; // Tipagem para `children`
    myValue: string; // Tipagem para `myValue`
};

const Container = ({children, myValue}: ContainerProps) => {
    return (
        <div>
            <h2>Container</h2>
            {children}
            <p>O valor é {myValue}</p>
        </div>
    )
}

export default Container