const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    console.time('santaTime')
    if(err) {
        console.log('There was an error');
    }
    const floors = data.toString();
    
    let floor = 0;
    for (var i = 0; i < floors.length; i++) {
        if(floors.charAt(i) == '('){
            floor++;
        }
        if(floors.charAt(i) == ')'){
            floor--;
        }
      }
      console.log(floor);

    console.timeEnd('santaTime');

});