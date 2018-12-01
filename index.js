const crypto = require("crypto");
const { key } = require("./secret.js");

const originalSecret = key.replace(/ /g, "").toUpperCase();
const timestamp = Math.floor(Date.now() / 30000);
console.log(timestamp);       // Time stamp is correct.

const secret = require("base32.js").decode(key);
const decodedKey = secret + "";
console.log(`Decoded string is : ${decodedKey}`);     //Base32 decode is correct

const newSecret = decodedKey + timestamp;
console.log(`New secret is : ${newSecret}`);

const hash = crypto
  .createHmac("sha1", newSecret)
  .update(newSecret)
  .digest("hex");
console.log(hash)