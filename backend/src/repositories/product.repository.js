import db from "../config/db.js"

async function getAll() {
    const [row] = await db.query(
        `SELECT id, name, price, stock FROM product`
    )
    return row
}

async function getById(id) {
    const [row] = await db.execute(
        `SELECT * FROM product WHERE id = ?`,
        [id]
    )
    if (row.length === 0) {
        return null
    }
    return row[0]

}

async function create(body) {
    const [result] = await db.execute(
        `INSERT INTO product(name, price, stock) VALUES(?,?,?)`,
        [body.name, body.price, body.stock]
    )
    return result
}

async function update(body, id) {
    const [row] = await db.query(
        `SELECT id FROM product WHERE id=?`,
        [id]
    )
    if (row.length === 0) {
        return null
    }
    const [result] = await db.execute(
        `UPDATE product SET 
        name = COALESCE(?, name),
        price = COALESCE(?, price),
        stock = COALESCE(?, stock) 
        WHERE id = ?`,
        [
            body.name ?? null,
            body.price ?? null,
            body.stock ?? null,
            id
        ]
    )
    return result
}

async function removeAll() {
    const [result] = await db.execute(
        `DELETE FROM product`
    )
    return result
}

async function deleteById(id) {
    const [row] = await db.execute(
        `SELECT id FROM product WHERE id = ?`,
        [id]
    )

    if(row.length === 0) {
        return null
    }
    const [result] = await db.execute(
        `DELETE FROM product WHERE id = ?`,
        [id]
    )
    return result
}
export default {
    getAll, getById, create, update, removeAll, deleteById
}