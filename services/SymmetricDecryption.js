const winston = require("winston");
var error = require("./error.js");
const crypto = require('crypto');

exports.decryptSymmetricKey = function (req, res) {
   try {
      const { privateKey, encryptedData } = req.body;
      // Convert Base64 encrypted data back to a Buffer
      const encryptedBuffer = Buffer.from(encryptedData, 'base64');

      // Decrypt the data using the private key
      const decryptedBuffer = crypto.privateDecrypt(
         {
            key: privateKey,
            padding: padding = crypto.constants.RSA_PKCS1_PADDING, // Specify PKCS1Padding
         },
         encryptedBuffer
      );

      const decryptedBase64 = decryptedBuffer.toString('base64');
      res.send(JSON.stringify(decryptedBase64));
   } catch (e) {
      console.log(e)
      return error.returnError(res, 500, "01", "Internal Error");
   }
}