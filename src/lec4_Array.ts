document.write("<br>Lecture of Array")
var randArray=[5,6,7,8]
// Traversal of Array
for(var val in randArray){
    document.write(val +"<br>")
}
// Convert Number into String
var strArray=randArray.map(String)

// for ..of provides value
for(var val of strArray){
    document.write(val +"<br>")
}
// Convert Number into String
var randArray=randArray.map((n)=>n*5)

// for ..of provides value
for(let val of randArray){
    document.write(val +"<br>")
}