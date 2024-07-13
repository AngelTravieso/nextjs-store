import { Product, Products } from "app/interfaces/products";
import { shopifyUrls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async (): Promise<Product[]> => {
    try {
        const response: Products = await fetch(
            shopifyUrls.products.all,
            {
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN!,
                },
            }
        ).then((resp) => resp.json());

        // Simular error
        // throw new Error("error")P;

        return response.products;
    } catch (error) {
        console.log('error')
        console.log(error);

        // También se puede propagar el error
        // throw error;

        // Devolver array vacio si hay error
        return [];
    }
};