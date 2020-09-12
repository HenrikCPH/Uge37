var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);

all.push('Lone', "Gitte");
all.unshift("Hans", "Kurt");

console.log(all.join(), "\n", all.join("-"));

all.shift("Hans");
all.pop("Gitte");

console.log("\n", "\n",all.join(), "\n", all.join("-"));

all.splice(3, 1);
all.splice(3, 1);

console.log("\n", "\n",all.join(), "\n", all.join("-"));

all.reverse();

console.log("\n", "\n",all.join(), "\n", all.join("-"));

all.sort();

console.log("\n", "\n",all.join(), "\n", all.join("-"));

var uppercase = all.map(lars => lars.toLocaleUpperCase());

console.log(uppercase);

console.log("\n", "\n",all.join(), "\n", all.join("-"));

let filtertid = all.filter((p) => p.startsWith("L"));

console.log(filtertid);

