const path = require('path')

// Create pages from markdown files
// In the following order: blog, team tes
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            blogs: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/blog/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/team/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/testimonials/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
          }
        `
      ).then(result => {
        result.data.blogs.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/blog.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/team.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve('src/templates/event.js')
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          })
        })
        resolve()
      })
    )
  })
}
