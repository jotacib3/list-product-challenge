import React from "react";
import { IRentableProduct } from "../../models/Product";

/**
 * This component is responsible for rendering the details of a rentable product
 * @param product - The rentable product to render
 */
function RentableProductDetails({product}: { product: IRentableProduct }) {
    return (
        <div className="ml-2">
            Availability: {product.availability}
            <br/>
            Rental Type: {product.rentalType}
        </div>
    );
}

export default RentableProductDetails;