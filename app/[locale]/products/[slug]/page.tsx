import ProductDetail from "@/components/products/ProductDetail";
import { products } from "@/data/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại | BISO JICA",
    };
  }

  return {
    title: `${product.name} | BISO JICA`,
    description: product.mainApplication,
    openGraph: {
      title: product.name,
      description: product.mainApplication,
      images: [
        {
          url: product.images[0],
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return <ProductDetail product={product} />;
}