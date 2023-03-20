import React from "react";
import { IProduct, IRentableProduct, ISimpleProduct, ISpaceProduct } from "../../models/Product";
import SimpleProductDetails from "./SimpleProductDetails";
import RentableProductDetails from "./RentableProductDetails";
import SpaceProductDetails from "./SpaceProductDetails";

interface IProductDetailsProps {
    product: IProduct;
}

/**
 * This component is responsible for rendering the details of a product
 * @param product - The product to render
 */
function ProductDetails({ product }: IProductDetailsProps) {
    const {__typename: type, ...productDetails} = product;

    const renderDetails = () => {
        switch (type) {
            case 'SimpleProduct':
                return <SimpleProductDetails product={productDetails as ISimpleProduct} />;
            case 'RentableProduct':
                return <RentableProductDetails product={productDetails as IRentableProduct} />;
            case 'SpaceProduct':
                return <SpaceProductDetails product={productDetails as ISpaceProduct} />;
            default:
                return null;
        }
    };

    return (
        <div className="p-4 flex items-center text-sm text-gray-600">
            {renderDetails()}
        </div>
    );
}

export default ProductDetails;