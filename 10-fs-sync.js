const {readFileSync, writeFileSync} = require('fs')

const first  = readFileSync('./content/first.txt', 'utf8');
const second  = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(   
    './content/result-sync.txt',
     `here is the result : ${first}, ${second}`, {flag: 'a'}
)

// const fs = require('fs');
// fs.readFileSync;