// "use client";

import Image from "next/image";

import { Product } from "app/interfaces/products";
import styles from "./MainProducts.module.sass";
import { getProducts } from "app/services/shopify";

// Se puede poner asincrono un server component
export const MainProducts = async () => {
  const products = await getProducts();

  console.log(products);

  // Obtener valor del .env
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  // console.log(process.env.SHOPIFY_API_KEY);

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;

          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
