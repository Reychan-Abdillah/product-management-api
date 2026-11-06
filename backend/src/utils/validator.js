function isInvalidPayload(body) {
    return (
        !body.name ||
        typeof body.name !== "string" || 
        !body.price ||
        typeof body.price !== "number" ||
        body.price < 0 ||
        body.stock === undefined ||
        !Number.isInteger(body.stock)
    )
}


function isInvalidPutPayload(body) {
    return (
        Object.keys(body).length === 0 ||
        (body.name !== undefined && ( typeof body.name !== "string" || !body.name.trim())) || 
        (body.price !== undefined && (!Number.isFinite(body.price) || body.price <= 0)) ||
        (body.stock !== undefined && (!Number.isInteger(body.stock) || body.stock < 0))
    )
}



export default {
    isInvalidPayload,
    isInvalidPutPayload
}