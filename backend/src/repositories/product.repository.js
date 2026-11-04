import db from "../config/db.js"

async function getAll() {
    const [row] = await db.query(
        `SELECT * FROM product`
    )
    return row
}
export default {
    getAll
}