const myArr=[0,1,2,3,4,5]

const Heroes=["Shaktiman","Superman","Batman"]
//console.log(myArr[0]);
const myArr2=new Array(1,2,3,4)
//console.log(myArr[1]);

//+++++++++++++++++++++Array Methods++++++++++++++++++++++++++

myArr.push(6)
//console.log(myArr);

myArr.push(7)
//console.log(myArr);

myArr.pop();
//console.log(myArr);

myArr.unshift(12);
//console.log(myArr);

myArr.shift();
//console.log(myArr);

//console.log(myArr.includes(9));

//console.log(myArr);

//console.log(myArr.indexOf(19));

const newArr=myArr.join()
//console.log(newArr);

//console.log(typeof newArr);

//+++++++++splice,slice++++++++++++++++++

const myn1=myArr.slice();
//console.log("B",myArr);

const myn2=myArr.splice(1,3);
//console.log(myn2);


//++++++++++++++Array Functions+++++++++++++++

const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];
marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);

const_allHeroes=marvel_heroes.concat(dc_heroes);
//console.log(const_allHeroes);

const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);
