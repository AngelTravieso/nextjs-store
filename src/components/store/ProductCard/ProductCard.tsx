import Image from "next/image";
import Link from "next/link";
import styles from './ProductCard.module.sass'
import { Product } from "app/interfaces/products";

interface ProductCardInterface {
    product: Product
}

export const ProductCard = ({ product }: ProductCardInterface) => {
    // Uso de optional chaining
    const price = product.variants?.[0]?.price ?? '';
    return (
        <Link href={`/product/${product.handle}?id=${product.id}`} className={styles.ProductCard__link}>
            <article className={styles.ProductCard}>
                <Image
                    src={product.image}
                    alt={product.title}
                    quality={80}
                    height={320}
                    width={320}
                    loading="eager"
                />
                <div className={styles.ProductCard__info}>
                    <h3>{product.title}</h3>
                </div>
                {/* Mostrar precio solo si existe */}
                {price && <span className={styles.ProductCard__priceTag}>${price} USD</span>}
            </article>
        </Link>
    );
};