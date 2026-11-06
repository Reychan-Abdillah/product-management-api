export default function catchAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((error) => {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({
                message: "Internal Server Error",
                error: error.message
            }));
        });
    };
}