var firstName = prompt("enter your firstName: ")
var lastName = prompt("enter your lastname: ")
var age = prompt("enter your age: ")
var height = prompt("enter your height: ")
var petName = prompt("enter your pet name: ")

if (firstName[0] === lastName[0] && 20<age<30 && height>170 && petName[petName.length - 1]==="y"){
  console.log("gotcha you are spy " + firstName + " " +lastName);
}
