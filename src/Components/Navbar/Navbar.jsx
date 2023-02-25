import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      {/* <img src="https://res.cloudinary.com/dbqmocg8f/image/upload/v1677288345/Computaci_C3_B3n-1.jpg_txhwbb.webp" />  */}
      <ul className={styles.containerList}>
        <li>Todos</li>
        <li>Celulares</li>
        <li>Notebooks</li>
      </ul>
      {/* <CardWidget /> */}
    </div>
  );
};

export default Navbar; //export por default
