// "use client";

const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
    {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY!,
      },
    }
  );

  const data = await response.json();

  return data;
};

// Se puede poner asincrono un server component
export const MainProducts = async () => {
  const products = await getProducts();

  console.log(products);

  // Obtener valor del .env
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  // console.log(process.env.SHOPIFY_API_KEY);

  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
