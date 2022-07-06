

var randomimagenumber = Math.floor(Math.random() *6) + 1;
var randomDice = "dice" + randomimagenumber + ".png";
var outputimage = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", outputimage);

var randomimagenumber2 = Math.floor(Math.random() *6) +1;
var randomDice2 = "dice" + randomimagenumber2 + ".png";
var output2 = "images/" + randomDice2;
document.querySelectorAll("img")[1].setAttribute("src", output2);

if (randomimagenumber > randomimagenumber2) {
    document.querySelector("h1").innerHTML= "PLAYER 1 wins!" ;
}
else if (randomimagenumber2 > randomimagenumber) {
    document.querySelector("h1").innerHTML= "PLAYER 2 wins!" ;
}
else  {
    document.querySelector("h1").innerHTML= "Its Draw!" 

}
