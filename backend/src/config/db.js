import mysql2 from "mysql2/promise"
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";



const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

dotenv.config({ 
    path: path.resolve(currentDir, "../../.env")
});

const db = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})
export default db