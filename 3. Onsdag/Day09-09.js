//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2;
};

var mul = function(n1,n2){
    return n1 * n2;
};

//Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


console.log( add(1,2) );     // What will this print?
console.log( add );          // What will it print and what does add represent?
console.log( add(1,2,3) ); // What will it print
console.log( add(1) );	  // What will it print 	
console.log( cb(3,3,add) ); // What will it print
console.log( cb(4,3,sub) ); // What will it print
// console.log(cb(3,3,add())); // What will it print (and what was the problem)
console.log(cb(3,"hh",add));// What will it print

var cb = function(n1,n2, callback){
try{
if((typeof callback === "function") && (typeof n1 ==="number") && (typeof n2 === "number")){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}else{
  throw new Error("Whoops. you did something wrong");
}
}catch (e){
  console.error(e.name + ": " + e.message);
}
};

console.log(cb(5,6,sub));
console.log(cb(5,6,add));
console.log(cb(5,6,mul));
console.log(cb(5,6,sub));

var anon = function(n1,n2) {
  return n1 / n2;
};

console.log(cb(5,6,anon));

var names = ["Lars","Jan","Peter","Bo","Frederik"];


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

var filArr = names.filter(names => names.length <= 3);

console.log(filArr);

for (let i = 0; i < filArr.length; i++) {
    console.log(filArr[i]);
}
var uppercase = names.map(lars => lars.toLocaleUpperCase());

console.log(uppercase);

function createHTMLNames (arr){
        return "<ul><li>" + arr.join("</li><li>") + "</li><ul>";
        }
        console.log(createHTMLNames(names));
        
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

console.log(cars);

console.log("cars before the year 1999");
console.log(cars.filter(car => (car.year > 1999)));

console.log("cars of the make Volvo");
console.log(cars.filter(car => (car.make === "Volvo")));

console.log("cars by price: 5000");
console.log(cars.filter(car => (car.price < 5000)));

var makeSQL = function(items) {
    var keys = Object.keys(items[0]);
    var output = items.map(car => {
        var temp = [];
        for(var i = 0; i < keys.length; i++) {
            temp.push(car[keys[i]]);
        }
        return temp.join(",");
    });
    var result = output.map(e => {
        return "INSERT INTO cars ("+keys.join(",")+") VALUE (" + e +")";
    });
    return result;
};
console.log(makeSQL(cars));

var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");



//a,d,f,e,b ----------- shit jeg havde squ ret!