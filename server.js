import http from "node:http"
import app from "./backend/app.js"
const server = http.createServer(app)

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
})
