// Write your code here!
document.querySelector('main#main').remove();

const newHeader = document.createElement("h1");
let name = "Alex";
newHeader.id = "victory";
newHeader.innerHTML =`${name} is the champion` ;