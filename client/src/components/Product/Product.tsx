import React, {useState} from 'react';
import ProductOverview from "../ProductOverview/ProductOverview";
import { IProduct } from "../../models/Product";
import ProductDetails from "../ProductDetails/ProductDetails";

interface IProductProps {
    product: IProduct;
}

function Product({product}: IProductProps) {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => setShowDetails((prevState) => !prevState);

    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <ProductOverview product={product}/>
                <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center">
                     <button
                         type="button"
                         onClick={handleShowDetails}
                         className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         Show Details
                     </button>
                  </span>
                </div>
                {showDetails &&
                    (<ProductDetails product={product}/>)
                }
            </div>
        </div>
    );
}

export default Product;