import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getProducts } from '../../../services/shopify/index';

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  // console.log(props)

  const products = await getProducts()

  const { categories } = props.params;

  // Simular error para mostrar la página de error
  // throw new Error('Error: Boom');

  // return <h1>Categoria dinamica: {categories}</h1>;

  return (
    <ProductsWrapper products={products} />
  )
}
