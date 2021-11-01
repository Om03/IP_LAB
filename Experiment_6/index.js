//Details
var fname = "Sharvil Dandekar";
var froll = "TY-IT-007";
var fsex = "Male";

//Operator
var x = 90;
var y = 2;
var z = x + y;
var a = x - y;
var b = x * y;

//Classes & objects
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Koenigsegg", 2018);
let myCar2 = new Car("Bugatti", 2019);
let myCar3 = new Car("SSC", 2020);

window.onload = function details() {
  document.getElementById("1st").innerHTML = fname;
  document.getElementById("2nd").innerHTML = froll;
  document.getElementById("3rd").innerHTML = fsex;

  document.getElementById("add").innerHTML = `x + y = ${z}`;
  document.getElementById("sub").innerHTML = `x - y = ${a}`;
  document.getElementById("mul").innerHTML = `x * y = ${b}`;

  if (x > y) {
    document.getElementById("cond1").innerHTML = "X is greater than Y";
  }

  if (32 > 45) {
    document.getElementById("cond2").innerHTML = "32 is greater than 45";
  } else {
    document.getElementById("cond2").innerHTML = "45 is greater than 32";
  }

  if (1 === 1) {
    document.getElementById("cond3").innerHTML = "1 is equal to 1";
  }

  for (let i = 0; i < 6; i++) {
    var node = document.createElement("div");
    node.className = "card";
    node.innerHTML = `Iteration${i}`;
    document.getElementById("forloop").appendChild(node);
  }

  for (let i = 1; i < 4; i++) {
    var tempnode = document.createElement("div");
    tempnode.className = "card";
    if (i === 1) {
      tempnode.innerHTML = `${myCar1.name} - ${myCar1.year}`;
    } else if (i === 2) {
      tempnode.innerHTML = `${myCar2.name} - ${myCar2.year}`;
    } else {
      tempnode.innerHTML = `${myCar3.name} - ${myCar3.year}`;
    }
    document.getElementById("classes").appendChild(tempnode);
  }
};

function onClick() {
  window.alert("On Click event");
}
