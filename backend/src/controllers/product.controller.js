import productService from "../services/product.service.js"

async function getAll(res) {
    const result = await productService.getAll()
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    return res.end(JSON.stringify({
        data: result
    }))

}

export default {
    getAll
}