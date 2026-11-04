import productRoutes from "./src/routes/product.routes.js"
function app(req, res) {
    productRoutes(req, res)
}
export default app