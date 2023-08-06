// Global --> here in the node js we have no window

// __dirname --> Path to current directory 
// __filename --> file name 
// require --> function to use modules(common js)
// module --> info about the current module(file) 
// process --> info about environment where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log("hello world")
},1000)