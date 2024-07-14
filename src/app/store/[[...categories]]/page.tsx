import { ProductsWrapper } from "app/components/store/ProductsWrapper";
import { getProducts } from '../../../services/shopify/products';
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { Product } from "app/interfaces/products";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params;
  // console.log(props)

  // Data fetching en paralelo
  let products: Product[] = [];
  // const collections = await getCollections();

  // Obtemer colecciones
  const collections = await getCollections();

  console.log('aca');
  console.log(collections);

  console.log('categories');
  console.log(categories);

  if (categories?.length > 0) {
    console.log('llego')
    const selectedCollectionId = collections.find(collection => collection.handle === categories[0])!.id;

    console.log('selecciono');
    console.log(selectedCollectionId);

    // Obtener los productos por coleccion
    products = await getCollectionProducts(selectedCollectionId.toString());

    console.log(products);
    console.log('miralo eh!');

  } else {
    products = await getProducts();
  }

  console.log(products);

  // Data fetching secuencial es cuando una de las peticiones es bloqueante, un getByID por ejemplo

  // Simular error para mostrar la página de error
  // throw new Error('Error: Boom');

  // return <h1>Categoria dinamica: {categories}</h1>;

  return (
    <ProductsWrapper products={products} />
  )
}
