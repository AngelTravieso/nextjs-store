import { Product, Products } from "app/interfaces/products";
import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async (id?: string): Promise<Product[]> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;

    const response: Products = await fetch(apiUrl, {
      headers: {
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN!,
      },
    }).then((resp) => resp.json());

    // Simular error
    // throw new Error("error")P;

    return response.products;
  } catch (error) {
    console.log("error");
    console.log(error);

    // También se puede propagar el error
    // throw error;

    // Devolver array vacio si hay error
    return [];
  }
};

export const getMainProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN!,
      }),
      // por defecto está acá, next forza la caché
      // cache: 'force-cache'
      // quitar caché
      // cache: "no-cache",}
      // revalida la cache cada 10seg, esto permite expresiones
      next: {
        revalidate: 10,
      },
    });

    const { products } = await response.json();

    return products;
  } catch (error) {
    console.log("error");
    console.log(error);

    // También se puede propagar el error
    // throw error;

    // Devolver array vacio si hay error
    return [];
  }
};
