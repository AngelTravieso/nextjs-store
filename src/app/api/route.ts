import { getProducts } from '../../services/shopify/index';

export async function GET() {
    const products = await getProducts();

    // Aquí se devuelve un objeto Response correcto conteniendo los productos en formato JSON
    return Response.json({ products });
}