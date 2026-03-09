import ProductList from "@/components/products/ProductList";
import { Suspense } from "react";

export default function Page() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductList />
            </Suspense>
        </>
    )
}