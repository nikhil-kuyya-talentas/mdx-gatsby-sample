import { useStaticQuery, graphql } from 'gatsby';

const useFAQs = () => {
    const data = useStaticQuery(graphql`
{
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "faq"}}}) {
        nodes {
            excerpt
        }
    }
}
`);

    return data.allMarkdownRemark.nodes.map((productandService) => {
        const { frontmatter, excerpt } = productandService;
        return {
            question: frontmatter.question,
            type: frontmatter.type,
            answer: excerpt
        }
    });
};

export default useFAQs;