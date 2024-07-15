"use client";

import { useParams, useSearchParams } from "next/navigation";

// interface ProductPageProps {
//   searchParams: {
//     id: string;
//   };
// }

export const ProductPage = () => {
  // Permite traer los parametros sin importar en que parte del componente estemos, el componente debe ser de tipo cliente, ya que es un hook
  const params = useParams();

  // Para obtener los queryParameters
  const searchParams = useSearchParams();

  // Obtener el searchParam por el nombre de la propiedad del queryParameter ej (/product/vehiculo?id=123456)
  const id = searchParams.get("id");

  console.log(params);
  console.log(id);

  // console.log(props.searchParams.id);

  return <h1>Product Page</h1>;
};

export default ProductPage;
