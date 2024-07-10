import styles from "./Hero.module.css";

export const Hero = () => {
  console.log(styles);

  return (
    // Aplicar el estilo del Hero.module
    <section className={styles.Hero}>
      <h1>Future world</h1>
      <h2>Empowering Yout Tomorrow, Today!</h2>
    </section>
  );
};
