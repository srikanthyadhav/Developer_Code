const winston = require("winston");
var error = require("./error.js");
const crypto = require('crypto');

exports.encryptSymmetricKey = function (req, res) {
   try {
      const { publicKey, symmetricKey } = req.body;
      // // encryp the symmetricKey
      // console.log(publicKey);
      // console.log(symmetricKey);
      // const encryptedData = crypto.publicEncrypt(
      //    publicKey,
      //    Buffer.from(symmetricKey)
      // );
      // // Convert the Buffer to Base64
      // const encryptedBase64 = encryptedData.toString('base64');

      // Convert symmetricKey to a Buffer
      const bufferData = Buffer.from(symmetricKey);
      // Encrypt the symmetricKey using RSA with PKCS1Padding
      const encryptedBuffer = crypto.publicEncrypt(
         {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING, // Specify PKCS1Padding
         },
         bufferData
      );
      const encryptedBase64 = encryptedBuffer.toString('base64');
      res.send(JSON.stringify(encryptedBase64));
   } catch (e) {
      console.log(e)
      return error.returnError(res, 500, "01", "Internal Error");
   }
}