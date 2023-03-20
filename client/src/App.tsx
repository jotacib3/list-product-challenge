import React from 'react';
import './App.css';
import ProductList from "./components/ProductList/ProductList";
import {useQuery} from "@apollo/client";
import GET_PRODUCTS from "./graphql/queries/get-products";
import { IProductResponse} from "./models/Product";

function App() {
    const { loading, error, data } = useQuery<IProductResponse>(GET_PRODUCTS);

    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error! ${error.message}</div>);

    return (
          <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <ProductList products={data?.products} />
          </div>
    );
}

export default App;
