    import productController from "../controllers/product.controller.js"

    function routes(req, res) {
        const cleanUrl = req.url.split("?")[0];
        const path = cleanUrl.split("/")
        const productPath = cleanUrl === "/products"
        console.log(productPath)
        const id = path[2]
        const isIntegerString = /^\d+$/.test(id)  && Number(id) > 0
        const pathIsValid =
            path[1] === "products" &&
            path.length === 3 &&
            id != undefined &&
            isIntegerString


        if(productPath) {
            if (req.method === "GET") {
                return productController.getAll(req, res, id)
            } else if (req.method === "POST") {
                return productController.create(req, res)
            } else if (req.method === "DELETE") {
                return productController.removeAll(req, res, id)
            }
        } else if (pathIsValid) {
            if(req.method === "PUT") {
                return productController.update(req, res, id)
            }else if(req.method === "GET") {
                return productController.getById(req,res,id)
            }else if(req.method === "DELETE") {
                return productController.deleteById(req, res, id)
            }
        }
        res.statusCode = 404
        res.end(JSON.stringify({
            message: "Endpoint not found"
        }))
    }

    export default routes

