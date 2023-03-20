import React from "react";
import { ISimpleProduct } from "../../models/Product";

/**
 * This component is responsible for rendering the details of a simple product
 * @param product - The simple product to render
 */
function SimpleProductDetails({product}: { product: ISimpleProduct }) {
    return <div className="ml-2">Inventory: {product.inventory}</div>;
}

export default SimpleProductDetails;