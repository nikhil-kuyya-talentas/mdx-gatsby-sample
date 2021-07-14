import { useStaticQuery, graphql } from 'gatsby';

const useCarouseldata = () => {
const data = useStaticQuery(graphql`
{
    allMarkdownRemark {
        nodes {
        frontmatter {
            image
            title
        }
        }
    }
    }
`);

return data.allMarkdownRemark.nodes;
};

export default useCarouseldata;  