async function parseBody(req) {
    let body = "";

    for await (const chunk of req) {
        body += chunk;
    }

    return JSON.parse(body);
}

export default parseBody;