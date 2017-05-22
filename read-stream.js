// currently working...data is processed when it comes through
// can use toString() or set the encoding for the stream ahead of time
// example ---> fs.createReadStream.setEncoding('utf-8') OR just do fs.createReadStream(file, 'utf-8')
let fs = require('fs');
let readableStream = fs.createReadStream('data.txt', 'utf-8');
//readableStream.setEncoding('utf-8')
let chunk;

let data = '';

// the more straightforward method
let initRead = function() {
    readableStream.on('data', function(buffer) {
        //console.log(buffer.toString());
        data += buffer;
    })
    readableStream.on('end', function(){
        console.log(data)
    })
};

// in other words...keep pushing data into a container until theres nothing left
let otherRead = function() {
    readableStream.on('readable', function(){
        //as long as read() doesnt return null, keep pulling data
        while((chunk = readableStream.read()) != null) {
            data += chunk;
        }
    })
    readableStream.on('end', function(){
        console.log(data);
    })
};

//first read method
initRead();

//second read method
//otherRead();
