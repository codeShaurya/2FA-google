const crypto = require("crypto");
const { key } = require("./secret.js");
var base32 = require("base32");

const originalSecret = key.replace(/ /g, "").toUpperCase();
const secret = base32.decode(originalSecret);
// console.log(secret);

const dateTime = Math.floor(Date.now() / 1000);
const timestamp = Math.floor(dateTime / 30);
// console.log(timestamp);

const newSecret = secret + timestamp;

const shasumFirst = crypto.createHash("sha1");
const hashEncoded = shasumFirst.update(newSecret, "utf-8");
const hash = hashEncoded.digest("hex");

const secretLast = secret + hash;

const shasumSecond = crypto.createHash("sha1");
const hashEncodedSecond = shasumSecond.update(secretLast, "utf-8");
const hashSecond = hashEncodedSecond.digest("hex");

console.log(hashSecond);
