// "use client";

import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";
// import { useParams, useSearchParams } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export const ProductPage = async ({ searchParams }: ProductPageProps) => {
  // Permite traer los parametros sin importar en que parte del componente estemos, el componente debe ser de tipo cliente, ya que es un hook
  // const params = useParams();

  // Para obtener los queryParameters
  // const searchParams = useSearchParams();

  // Obtener el searchParam por el nombre de la propiedad del queryParameter ej (/product/vehiculo?id=123456)
  // const id = searchParams.get("id");

  const id = searchParams.id;

  const products = await getProducts(id);


  // Si no hay ID lo redirecciono a store
  if (!id) {
    redirect('/store');
  }

  // console.log(params);
  // console.log(id);

  // console.log(props.searchParams.id);

  return <ProductView product={products[0]} />;
};

export default ProductPage;
