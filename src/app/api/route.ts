import { getProducts } from '../../services/shopify/products';

export async function GET() {
    const products = await getProducts();

    // Aquí se devuelve un objeto Response correcto conteniendo los productos en formato JSON
    return Response.json({ products });
}