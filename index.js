var data = "nandhini";
data = 3;
data=true;
data=[1,2,3,4,5]              // array values implemented
data={key : 1}// object 
console.log(data)
console.log(itsstring.length)
console.log(itsstring.spilt("")) //next line
console.log(itsstring.spilt("")) // for  a each character
console.log(itsstring.trim())
// to store the value in a variable
itsString = itsString.trim();
console.log(itsString.length)
itsString.charAt(0)
itsString[0]
console.log(itsString.indexOf("")
//console.log(itsString.lastIndexof("l")
//console.log(itsString.include("l")
console.log("str"+"123") //concate the num and the string
var newvar = 123
console.log(typeof newvar.toString()) //conver the number to string
console.log(typeof ""+ newvar)
console.log('${newvar}') // convert the number to string ..literals

var newvar1="fsdarf
vgvywdasfwe
dewfef
wedewqd ${newvar}'
console.log(newvar1);

//-------------NUMBERS----------------
var numHolder=123.45;
console.log(Number,parseInt(numHolder) //123
var strHolder=123;
console.log(typef Number(strHolder)) //false
console.log(Number,parseFloat(numHolder) //123.45

//-------------MATHS--------------------

var intVAlue=123.45;
console.log(Math.floor(intValue)) //123
console.log(Math.ceil(intValue))//124 ceiling--value-of--the--number
console.log(Math.round(intValue))
console.log(Math.random())
console.log(Math.random()*100)
console.log(Math.random()*100+1)
console.log(Math.random()*100+1)

//--------------boolean------------
var boolVar=true; //true means 1 and false means 0

//--------------null and undefined---------------\
var undefVar;
console.log(undefVar)   //undefined

//---------------null--------------------
var nulVar=null;
console.log(nulVar) //null

//---------------arrays----------------
var arrVar=[1,2,3,4,5,6,7,8,9,10];
console.log(arrVar[0])
console.log(arrVar.length)


arrVar.pop()
//to shift the element from the first

arrVar.shift()

//to shift the element to the first

arrVar.unshift(0)
var sample = hello;
console.log(sample.reverse()) 
//join the string
console.log(sample,join("")) //hello

console.log(sample.join)
for(var i=0;i<sample.length;i++
    console.log(i);

)//reverse order
i=5;
while(i>0){
    console.log(i);
    i--;
}
//------------higher order function----------------
function add(a,b){
    return a+b;
}
console.log(add(1,2))
// to declare th variable name and value at the same time
var[name,age] = [1,2];
console.log(name,age
})
var fruits.forEach(fruit,index)=>{
    console.log(fruit)
   console.log(index)
}
//if else
var age=18;
if(age>18){
    console.log("eligible")
}






console.l.og("not eligible")
}
else if(age>20){
    console.log("eligible")
}
else{
    console.log("not eligible")
})
var char = "a";
switch(char){
    case "a":
        console.log("vowel")
        break;
    case "e":
        console.log("vowel")
        break;
    case "i":
        console.log("vowel")
        break;
    case "o":
        console.log("vowel")
        break;
    case "u":
        console.log("vowel")
        break;
    default:
        console.log("consonant")
        break;
}
switch(char){
    
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel")
        break;
    default:
        console.log("consonant")
        break;  
}

//----------------  TERNARY OPERATOR----------------
var char=prompt("enter a character");
var char= char??"b";
var result = char =="a"||char == "e"||char == "i"||char == "o"||char == "u"?"vowel":"consonant";
console.log(result);
// example ->2
var samplevar='a';
samplevar=samplevar=="a"?"vowel":"consonant";
console.log(samplevar);
///
var name="nandhini";
var age=18;
var result


//arrow functions
functio hello(){
    console.log("hello");
}
hello();

}
function hello()
console.log(value*value)
//method overloading
function multiple(value)
{
    return value*value}
}
console.logmultiple(2);
function multiple (value,value1)
{
    return value*value1
}let name="John"
let name="John"
const name="John"
const age=39;
console.log(name,age);
//------------------------------------------------------










let addvalue = (a,b)=>{
    return a+b;
}
console.log(addvalue([10,20]));
const addvalue = (a,b)=>{
    


}
//mappinglet arr=[1,2,3,4,5,6,7,8,9,10];

let arr=[1,2,3,4,5,6,7,8,9,10];
let arr3=arr.filter((i)=>i%2==0);
console.log(arr1);
console.log(arr);

//destruction of the array
 let arr=[1,2,3,4,5]
 let [a,b,c,d,e]=arr;
 console.log(a) //1
 console.log(b) //2 
 console.log(c) //3
 console.log(d) //4
 console.log(e) //5

 // to create two functions

 const sayhello=()=>{
     setTimeout(()=>{
         console.log("hello");  

     })
 }
const saybye=()=>{
    setTimeout(()=>{
        console.log("bye");  
    })
}
sayhello();
saybye();
//--------------------------------------------------------//
setInterval(()=>{
    console.log("hello");
})
// to stop the interval, use the function "CLEARINTERVAL"

if(i==5){
    clearInterval()
}

let callback=(a,b)=>{
    console.log(a+b);
}
setInterval(callback,1000,5,6);
callback(5,6)

promise.all(

)
// promises are the traditional method of handling asynchronous javascript code
async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);  
}catch(error){
    console.log(error); 

}
const data = () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return response;
}
data().then(e)=>{
    console.log(e));
    console.log("hello");
}}
