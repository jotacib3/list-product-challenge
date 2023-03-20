import React from "react";
import { IProduct } from "../../models/Product";

interface IProductOverviewProps {
    product: IProduct;
}

/**
 * This component is responsible for rendering the overview of a product
 * @param product - The product to render
 */
const ProductOverview = ({product}: IProductOverviewProps) => {
    return (
        <>
            <div className="relative pb-48 overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src={product.image}
                     alt="product image"/>
            </div>
            <div className="p-4">
                <span
                    className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                <h2 className="mt-2 mb-2  font-bold">{product.name}</h2>
                <p className="text-sm">{product.sellerName}</p>
                <div className="mt-3 flex items-center">
                    <span className="text-sm font-semibold">ab</span>&nbsp;<span
                    className="font-bold text-xl">{product.price}</span>&nbsp;<span
                    className="text-sm font-semibold">€</span>
                </div>
            </div>
        </>
    )
};

export default ProductOverview;