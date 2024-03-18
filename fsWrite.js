const fs = require('fs');


const data = 'Hello';


const filePath = 'example.txt';


fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('error', err);
  } else {
    console.log('success');
  }
});
