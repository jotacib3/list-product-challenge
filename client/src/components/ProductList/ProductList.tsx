import React from 'react';
import ProductOverview from "../ProductOverview/ProductOverview";

import { IDetailedProduct } from "../../models/Product";

interface IProductListProps {
    products: IDetailedProduct[] | undefined;
}

const ProductList = ({ products }: IProductListProps) =>
    (
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
                {!!products && products.map((product) => (
                    <ProductOverview key={product.id} product={product} />
                ))}
            </div>
        </div>
);

export default ProductList;