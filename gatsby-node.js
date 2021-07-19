const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        devtool: "eval-source-map"
    });
};

exports.onCreateNode = args => {
  const { actions, node,getNode } = args
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//     const { createNodeField } = actions;
  
//     if (_.get(node, "internal.type") === `MarkdownRemark`) {
//       // Get the parent node
//       const parent = getNode(_.get(node, "parent"));
  
//       createNodeField({
//         node,
//         name: "collection",
//         value: _.get(parent, "sourceInstanceName")
//       });
//     }
//   };
  
// exports.onCreateNode =({ node, getNode, boundActionCreators }) => {
//     if (node.internal.type === 'MarkdownRemark') {
//         const { createNodeField } = boundActionCreators;
//         node.collection = getNode(node.parent).sourceInstanceName;
//     }
// }