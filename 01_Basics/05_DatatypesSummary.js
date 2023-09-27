//  Primitive
//7 Datatypes:String,Numbers,Boolean,null,undefined,symbol,BigInt

//Reference Datatypes(Non-Primitives)

//3 type:Arrays,Objects,Functions

const score=100
const scorevalue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
//console.log(id===anotherId);

//const BigNumber=34556357665356754n

const heroes=["Shaktiman","Krishh","Baalwir"]
//letmyObject
{
    name:"Ayesha"
    age:29
}

const myFunction=function()
{
  //  console.log("Hello World");
}


//console.log(typeof BigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive),Heap(Non-Primitive)

let myyoutubechannel="AyeshaFatimaSabadotcom";

let anothername="Chai aur code";

console.log(myyoutubechannel);
console.log(anothername);

let userOne={
  email: "user@google.com",
  upi:"user@ybl"
}

let userTwo=userOne
  userTwo.email="hiteshchoudharygoogle.com"

console.log(userOne.email);
console.log(userTwo.email);

