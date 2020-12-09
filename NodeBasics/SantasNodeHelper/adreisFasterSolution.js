const fs = require('fs');

function question() {
    console.time('test');
    fs.readFile('./input.txt', (err, data) => {
        const directions = data.toString();
        const directionArray = directions.split('');
        const answer = directionArray.reduce((acc, currentValue) => {
            if(currentValue === '('){
                return acc +=1;
            }
            else if( currentValue === ')'){
                return acc -=1;
            }
        }, 0)
        console.timeEnd('test');
        console.log(answer)
    })
}

question();