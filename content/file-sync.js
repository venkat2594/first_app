const {readFileSync,writeFileSync}=require('fs');

const first = readFileSync('./content/first.txt','utf8');
const seconds = readFileSync('./content/second.txt','utf8');

console.log(first,seconds);

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${seconds}`,
{flag:'a'}
);