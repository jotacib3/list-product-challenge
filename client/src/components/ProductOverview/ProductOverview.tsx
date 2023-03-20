import React, {useState} from "react";
import {IDetailedProduct} from "../../models/Product";

interface IProductOverviewProps {
    product: IDetailedProduct;
}

const ProductOverview = ({product}: IProductOverviewProps) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => setShowDetails((prevState) => !prevState);
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
                <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center">
                    <button
                        type="button"
                        onClick={handleShowDetails}
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                      Show Details
                    </button>
                  </span>
                </div>
                {showDetails &&
                    (<div className="p-4 flex items-center text-sm text-gray-600">
                        <span className="ml-2">34 Bewertungen</span>
                    </div>)
                }
            </div>
        </div>
    )
};

export default ProductOverview;