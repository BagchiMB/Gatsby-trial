const path= require('path')
exports.createPages = async ({graphql,actions})=>{
    const {createPage}= actions
    let res = await graphql(`
        query GetProducts {
            products:allContentfulProduct {
                nodes {
                    slug
                }
            }
        }
    `)
    res.data.products.nodes.forEach(p => {
        createPage({
            path:`/products/${p.slug}`,
            component:path.resolve(`src/templates/product-templates.js`),
            context:{
                slug:p.slug,
            },
        })
    });
}