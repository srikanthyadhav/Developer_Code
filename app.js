const express = require('express');
const app = express();


const whitelistedIPs = ['192.168.1.1', '::1']; // Add your trusted IPs here

app.use(express.json()); // this is used because of the payload reading

app.use((req, res, next) => {
    const clientIP = req.ip;

    if (whitelistedIPs.includes(clientIP)) {
        next(); // IP is whitelisted, proceed to the next middleware
        // res.send('Hello, World!');
    } else {
        console.log(clientIP);
        console.log(req)
        res.status(403).send('Access denied: Your IP is not whitelisted.');
    }
});
let decodepayload = require("./services/decodePayload.js");
let encryptSymmetricKey = require("./services/SymmetricEncryption.js");
let decryptSymmetricKey = require("./services/SymmetricDecryption.js");
let generateSchema = require()
// Your API routes go here

app.post('/SymmetricEncryptionValue',encryptSymmetricKey.encryptSymmetricKey);
app.post('/SymmetricDecryptionValue',decryptSymmetricKey.decryptSymmetricKey);
app.post('generateSchema',)
app.post('/decodePayload', decodepayload.decode);
app.get('/api/data', (req, res) => {
    res.send('Hello this is the sample get resources for testing');
});

app.all('/*',(req, res) => {
    res.status(405).send('Unsupported API Request')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});