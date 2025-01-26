import styles from './CarDetails.module.css'

type CarDetails = {
    brand: string;
    km: number;
    color: string;
    newCar: boolean
};
const CarDetails = ({brand, km, color, newCar}: CarDetails) => {
  return (
    <div>
        <h2 className={styles.title}>{brand}</h2>
        <div className={styles.detail_car}>
        <p className={styles.color_car}>Cor: {color}</p>
        {newCar ? (<p className={styles.new_car}>Esse carro é novo {km}km </p>) : (<p className={styles.old_car}>Esse carro é usado com {km}km rodados.</p>)}
        </div>
    </div>
  )
}

export default CarDetails