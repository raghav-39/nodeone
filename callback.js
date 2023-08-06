// so here we are gonna be seeing the callback functions inside the java script
function x(y){
    console.log("Here is the implementation of x")
    y();
}
x(function y(){
    console.log("Here is the implementation of y")
})
// the implementation of y is subjective to x only that is inside the x only the function y can be called

// so when we do 
// document.getElementById("Click me").addEvenetListener("click",function(){
// this function that we have written here is the callback function and the execution of this function is governed totally by the even listener that is enclosing it
// })



// now here is the deal that the function y is dependent on function x, the function y is called by the function x