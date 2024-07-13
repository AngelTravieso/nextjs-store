import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getProducts } from '../../../services/shopify/products';
import { getCollections } from "app/services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  // console.log(props)

  // Data fetching en paralelo
  const products = await getProducts();
  // const collections = await getCollections();

  // Data fetching secuencial es cuando una de las peticiones es bloqueante, un getByID por ejemplo

  const { categories } = props.params;

  // Simular error para mostrar la página de error
  // throw new Error('Error: Boom');

  // return <h1>Categoria dinamica: {categories}</h1>;

  return (
    <ProductsWrapper products={products} />
  )
}
