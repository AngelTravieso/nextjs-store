import Image from "next/image";

import styles from "./Description.module.sass";

export const Description = () => {
  return (
    <section className={styles.Description}>
      {/* para buscar imagenes estaticas basta con colocar el path */}
      <Image
        src="/images/description.jpeg"
        alt="products marketplace"
        width={500}
        height={300}
        // desactivar lazy loading por defecto de la imagen (no recomendado)
        // priority={false}
        // calidad de la imagen, por defecto nextImage tiene la calidad en 75%
        // quality={30}
      />
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, eius
          in? Necessitatibus eius, suscipit illo veritatis sit accusantium sequi
          ratione molestiae, aliquam quia voluptatem est perferendis neque nihil
          ex ullam.
        </p>
      </div>
    </section>
  );
};
