const {readFileSync ,writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second)

// the utf8 here is the character encoding standard without this there will be lots of ajeebness 
writeFileSync('./content/third.txt',`Here is the result : ${first},${second}`)
// so if this file does not exists then node will create this file else it will overwrite in the existing file
// and if we want to append then there is a way of doing that as well, we add the flag for that inside this thing