exports.returnError = function (res, httpCode, resultCode, resultMessage) {
    if (!res.headersSent) {
        res.set("Content-Type", "application/json");
        res.set("resultMessage", resultMessage);
        res.set("resultCode", resultCode);
        res.status(httpCode);
        var errorResp = { "code": resultCode, "message": resultMessage };
        res.send(JSON.stringify(errorResp));
    }
};