//Details
var fname = "Shailli Mamnia";
var froll = "TY-IT-32";
var fsex = "female";

//Classes & objects
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);
let myCar3 = new Car("Porch", 2015);

window.onload = function details() {
  document.getElementById("1st").innerHTML = fname;
  document.getElementById("2nd").innerHTML = froll;
  document.getElementById("3rd").innerHTML = fsex;

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
