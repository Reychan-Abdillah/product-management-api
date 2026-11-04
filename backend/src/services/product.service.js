import productRepository from "../repositories/product.repository.js";

function getAll() {
    return productRepository.getAll()
}

export default {
    getAll
}