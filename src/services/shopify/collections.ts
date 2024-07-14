import { shopifyUrls } from "./urls";
import { env } from "app/config/env";
import { CollectionRule, Collections } from "app/interfaces/collections";
import { Products, Product } from "app/interfaces/products";

export const getCollections = async (): Promise<CollectionRule[]> => {
    try {
        const response: Collections = await fetch(
            shopifyUrls.collections.all,
            {
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN!,
                },
            }
        ).then((resp) => resp.json());

        const { smart_collections } = response;

        const transformedCollections = smart_collections.map((collection): CollectionRule => {
            return {
                id: collection.id,
                title: collection.title,
                handle: collection.handle
            }
        });

        // Simular error
        // throw new Error("error");

        // console.log(response);

        return transformedCollections;
    } catch (error) {
        console.log('error')
        console.log(error);

        // También se puede propagar el error
        // throw error;

        // Devolver array vacio si hay error
        return [];
    }
};

export const getCollectionProducts = async (id: string): Promise<Product[]> => {

    console.log('en el metodo', id);

    try {
        const response: Products = await fetch(
            shopifyUrls.collections.products(id),
            {
                headers: {
                    "X-Shopify-Access-Token": env.SHOPIFY_TOKEN!,
                },
            }
        ).then((resp) => resp.json());


        return response.products;
    } catch (error) {
        console.log(error);

        return [];
    }
}