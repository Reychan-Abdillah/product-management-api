function sendResponse(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");

    return res.end(JSON.stringify(data));
}

export default sendResponse;