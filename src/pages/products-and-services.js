import * as React from 'react';
import Layout from '../components/layout';
import useProductsandServices from "../hooks/use-products-and-services"


const ProductsandServicesPage = () => {
    const data = useProductsandServices();
    return (
        <Layout>
         <h1>Products and Services</h1>
         <pre>{JSON.stringify(data,null,2)}</pre>
        </Layout>
    )
}

export default ProductsandServicesPage;