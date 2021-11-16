window.onload = function details() {
  //Date
  document.getElementById(
    "date"
  ).innerHTML = `${new Date().getDate()} - ${new Date().getDay()} - ${new Date().getFullYear()}`;

  //arrays
  var x = [" React-JS ", " Node ", " Express ", " MongoDB "];
  x.push("Angular");
  x.push("Mysql");
  x.map((item) => {
    document.getElementById("array").append(` ${item} ,`);
  });

  //string
  var str = "Om Parab";
  document.getElementById("string").innerHTML = str;
};
