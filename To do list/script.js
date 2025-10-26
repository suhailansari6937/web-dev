function doSomething(x, y){
    console.log(arguments)
    arguments[1] = 20
    return x+y
}
console.log(doSomething(5,10));