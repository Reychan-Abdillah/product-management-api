import productRepository from "../repositories/product.repository.js";

function getAll() {
    return productRepository.getAll()
}

function getById(id) {
    return productRepository.getById(id)
}

function create(body) {
    return productRepository.create(body)
}

function update(body, id) {
    return productRepository.update(body, id)
}

function removeAll() {
    return productRepository.removeAll()
}

function deleteById(id) {
    return productRepository.deleteById(id)
}

export default {
    getAll, getById, create, update, removeAll, deleteById 
}