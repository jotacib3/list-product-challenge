import React from 'react';

import { IDetailedProduct } from "../../models/Product";
import Product from "../Product/Product";

interface IProductListProps {
    products: IDetailedProduct[] | undefined;
}

/**
 * This component is responsible for rendering a list of products
 * @param products - The products to render
 */
const ProductList = ({ products }: IProductListProps) =>
    (
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
                {!!products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
);

export default ProductList;