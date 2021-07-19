import { useStaticQuery, graphql } from 'gatsby';

const useProductsAndServices = () => {
    const data = useStaticQuery(graphql`
{
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "products-and-services"}}}) {
        nodes {
        excerpt
        }
    }
}
`);

    return data.allMarkdownRemark.nodes.map((productandService) => {
        const { frontmatter, excerpt } = productandService;
        return {
            name: frontmatter.name,
            type: frontmatter.type,
            body: excerpt
        }
    });
};

export default useProductsAndServices;