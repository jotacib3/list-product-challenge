import React from "react";
import { ISpaceProduct } from "../../models/Product";

/**
 * This component is responsible for rendering the details of a space product
 * @param product - The space product to render
 */
function SpaceProductDetails({product}: { product: ISpaceProduct }) {
    return (
        <div className="ml-2">
            Location: {product.location}  - <a href=""><strong>Show in Google Map</strong></a>
            <br/>
            Availability: {product.availability}
        </div>
    );

}

export default SpaceProductDetails;