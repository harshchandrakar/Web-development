var arr = [];
var data = prompt("possible commands: add,remove,display, and quit");
while (data!=="quit") {
  if (data=== "add") {
    var adding = prompt("enter to add in array: ");
    return arr.push(adding)
  }else if (data === "remove") {
    var removing = prompt("enter to remove :");
    return arr.pop(arr.indexof(removing))
  }else if (data === "display" ) {
    return console.log(arr);
  }
}
