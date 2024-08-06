let age:number =22;

if(age >= 18){
    console.log("Can Vote")
}

if(age >= 18)
    age +=20

let sales:number =123
let course = 'TypeScript'
 let is_published =true
 let level

 function render(document: any){
    console.log(document)
 }

 let array = [1, 2, '3']

 let user: [number,string]=[1,"Dhiraj"]

// Pascal case
enum Size {Small=1,Medium,Large}
let mySize: Size =Size.Medium


// Object
let employee:{
    readonly id:number,
    name:string,
    retire:(date: Date)=>void
} = {id:1,
    name:'Dhiraj',
    retire: (date:Date)=> {
        console.log(date);
    },}

employee 