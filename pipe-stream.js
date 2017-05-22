let fs = require('fs');
let readableStream = fs.createReadStream('data.txt');
let writeableStream = fs.createWriteStream('the-new.txt');

readableStream.pipe(writeableStream);
