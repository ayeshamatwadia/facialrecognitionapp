// we import the file system module for node
const fs = require('fs');

// read file from the current directory ./
fs.readFile('./hello.txt', (err, data) => {
    if(err){
        console.log('There was an error');
    }
    console.log('1', data);
    // you need to do some encoding - by default to string does a utd encoding
    console.log('1', data.toString());
    // is the same as 
    console.log('1', data.toString('utf8'));
    // remember utf8 is an encoding format where characters are represented by a number and letter
});

console.log('**************');

// read file synchronous
const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

/*

A quick synopsis of the above code : If you run this script you will find that
the second console log runs before the first. This is because the first readFile
is asynchronous - and it has a callback function. So what the first function does
on line 5 is it says "I going to read the hello.txt file, when I am done, I will 
let you know and I will give you either an error or some data but you can continue
with your business", so the executions continues along to the rest of the code

The readFileSync is synchronous - So it actually waits on line 20 until the file is
read

You generally want to use the async function because we do not want pause the execution
of the program while waiting on a file read.
*/
 
// APPEND - We can write to a file using the append functions

fs.appendFile('./hello.txt', ' This is another line of text', (err)=> {
    if(err){
        console.log('There was an error', err);
    }
})

//  WRITE - we can create a new file with contents using the write function

fs.writeFile('bye.txt', 'Goodbye my friend, goodbye my lover', (err)=> {
    if(err){
        console.log('There was an error writing', err);
    }
})

// DELETE - we can delete a file using the fs unlink function

fs.unlink('./bye.txt', (err) => {
    if(err){
        console.log(err);
    }
})