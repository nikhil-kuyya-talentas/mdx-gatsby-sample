import { useStaticQuery, graphql } from 'gatsby';

const useFAQs = () => {
    const data = useStaticQuery(graphql`
{
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "faq"}}}) {
        nodes {
          id
          excerpt
          frontmatter {
            question
            type
          }
        }
      }
}
`);

    return data.allMarkdownRemark.nodes.map((faq) => {
        const { frontmatter, excerpt } = faq;
        return {
            question: frontmatter.question,
            type: frontmatter.type,
            answer: excerpt
        }
    });
};

export default useFAQs;