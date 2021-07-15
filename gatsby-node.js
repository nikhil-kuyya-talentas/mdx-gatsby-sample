// const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map"
    });
};

// exports.onCreateNode = args => {
//   const { actions, node } = args
//   if (node.internal.type === "MarkdownRemark") {
//     const { createNodeField } = actions
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }