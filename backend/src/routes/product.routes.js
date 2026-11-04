import productController from "../controllers/product.controller.js"

function routes(req, res) {
    if (req.method === "GET" && req.url === "/products") {
        return productController.getAll(res)
    }
    res.statusCode = 404
    res.end(JSON.stringify({
        message: "Endpoint not found"
    }))
}

export default routes

