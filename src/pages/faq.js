import * as React from 'react';
import Layout from '../components/layout';
import useFAQs from "../hooks/use-faqs"


const FAQPage = () => {
    const data = useFAQs();
    return (
        <Layout>
         <h1>FAQ</h1>
         <pre>{JSON.stringify(data,null,2)}</pre>

        </Layout>
    )
}

export default FAQPage;