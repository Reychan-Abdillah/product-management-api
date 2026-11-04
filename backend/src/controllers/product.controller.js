import productService from "../services/product.service.js"
import sendResponse from "../utils/response.js"

async function getAll(res) {
    const result = await productService.getAll()
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    return sendResponse(res, 200, {data : result})

}

export default {
    getAll
}