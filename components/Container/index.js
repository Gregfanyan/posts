import styles from "./Container.module.css";

function Container({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Container;
