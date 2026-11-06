import productService from "../services/product.service.js"
import sendResponse from "../utils/response.js"
import parseBody from "../utils/parseBody.js"
import validator from "../utils/validator.js"
import catchAsync from "../utils/catchAsync.js"

const getAll = catchAsync(async function getAll(req, res, id) {
    const result = await productService.getAll()
    return sendResponse(res, 200, { data: result })
})

const getById = catchAsync(async function getById(req, res, id) {
    const result = await productService.getById(id)

    if (!result) {
        return sendResponse(res, 404, { message: "Product not found" })
    }
    return sendResponse(res, 200, { data: result })
})

const create = catchAsync(async function create(req, res, id) {
    const body = await parseBody(req)

    if (validator.isInvalidPayload(body)) {
        return sendResponse(res, 400, {
            message: "Bad Request"
        })
    }

    const result = await productService.create(body)
    return sendResponse(res, 201, {
        message: "successfully added product data",
        data: result
    })
})

const update = catchAsync(async function update(req, res, id) {
    const body = await parseBody(req)
    if (validator.isInvalidPutPayload(body)) {
        return sendResponse(res, 400, {
            message: "Incorrect data format! Ensure the data type is correct and the value is not negative."
        })
    }

    const result = await productService.update(body, id)

    if (!result) {
        return sendResponse(res, 404, {
            message: "Product not found"
        })
    }
    return sendResponse(res, 200, {
        message: "Product successfully updated!",
        data: result
    })
})

const removeAll = catchAsync(async function removeAll(req, res, id) {
    const result = await productService.removeAll()
    return sendResponse(res, 200, {
        message: `Successfully Deleted all Product Data. Total Data ${result.affectedRows}`,
        data: result
    })
})

const deleteById = catchAsync(async function deleteById(req, res, id) {
    const result = await productService.deleteById(id)
    if (!result) {
        return sendResponse(400, { res, message: "Product not foundd" })
    }
    return sendResponse(res, 200, {
        message: "successfully deleted the data",
        data: result
    })
})

export default {
    getAll, getById, create, update, removeAll, deleteById
}

