import ProductDetail from "@/components/products/ProductDetail";
import { products } from "@/data/products";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    console.log("Slug:", slug);

    const product = products.find((p) => p.slug === slug);

    if (!product) return <div>Not Found</div>;

    return <ProductDetail product={product} />;
}