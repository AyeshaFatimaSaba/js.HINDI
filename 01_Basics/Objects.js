const mySym=Symbol("key1");
const JsUser={
    name:"Ayesha",
    fullname:"AyeshaFatimaSaba",
    [mySym]:"mykey1",
    age:29,
    location:"Jaipur",
    email:"hitesh@google.com",
    isloggedIn:false,
    lastloginDays:["Mondays","Saturday"],
}

//console.log(JsUser["email"]);
console.log(JsUser["name"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);