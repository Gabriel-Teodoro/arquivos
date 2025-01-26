type CarDetails = {
    brand: string;
    km: number;
    color: string;
    newCar: boolean
};

const CarDetails = ({brand, km, color, newCar}: CarDetails) => {
    return (
        <div>
            <h1>CarDetails</h1>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Km: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {newCar && <p>Este carro é novo!</p>}
        </div>
    )
}

export default CarDetails