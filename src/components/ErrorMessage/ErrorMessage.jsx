import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={styles.errorMessage}>{message}</div>;
};

export default ErrorMessage;
