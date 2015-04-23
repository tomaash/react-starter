var foo = (bar) => {
	console.log(bar);
};

foo('quux');

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

var lol = async function() {
	var x = await promise;
	console.log(x);
	return x;
};

lol().then(function(z){
	console.log(z);
});

import { Actions } from "items-store";

// All the actions of the application

export var Todo = Actions.create([
	"add",
	"update",
	"reload",
	"update"
]);

