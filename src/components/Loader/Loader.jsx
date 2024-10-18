import { FidgetSpinner } from "react-loader-spinner"; 
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <FidgetSpinner />
    </div>
  );
}

export default Loader;