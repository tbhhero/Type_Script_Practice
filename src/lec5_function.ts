document.write("Lecture 5 Function<br>")
var getSum =function(num1:number,num2:number):number{
    return num1+num2
}

var theSum1: number =getSum(5,5)

document.write("5 + 5 ="+theSum1+"<br>")

var getDiff =function(num1:number,num2=4,num3?:number):number{
    // Check if a value assigned with typeof
    if(typeof num3 !== 'undefined'){
        return num1-num2-num3
    }
    return num1-num2
}

var theSum1: number =getSum(5,5)
var theDiff1: number =getDiff(10)
document.write("10 - 4 ="+theDiff1+"<br>")
var theDiff2: number =getDiff(10,4,4)
document.write("10 - 4 - 4 ="+theDiff2+"<br>")
