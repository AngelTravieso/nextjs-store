"use client";

export const MainProducts = () => {
  // Obtener valor del .env
  console.log(process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  // console.log(process.env.SHOPIFY_API_KEY);

  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
