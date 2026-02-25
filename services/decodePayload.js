const winston = require("winston");
var error = require("./error.js");

exports.decode = function(req,res) {
 try {
    var response = "Hello this is the decodepayload service file";
    const payload = req.body;
    console.log(payload);
    res.send(JSON.stringify(response));
 } catch {
    return error.returnError(res, 500, "01", "Internal Error");
 }
}