import styles from "./Container.module.css";

function Container({ children, style }) {
  return (
    <div style={style} className={styles.wrapper}>
      {children}
    </div>
  );
}

export default Container;
