const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We can seem to find the page that you are looking for</p>
    <a href="/">Back home</a>
    `)
})

server.listen(5000)