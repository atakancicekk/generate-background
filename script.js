var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");


setBackground();

function setBackground(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")"
	css.textContent = body.style.background
	button.style.background = "linear-gradient(to left," + color1.value + "," + color2.value + ")"
 };


function randomBackground(){
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	button.style.background = "linear-gradient(to left," + "#" + randomColor1 + "," + "#" + randomColor2 + ")"

	body.style.background = "linear-gradient(to right, " + "#" + randomColor1 + "," + "#" + randomColor2 + ")"
	css.textContent = body.style.background
};



color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);

button.addEventListener("click", randomBackground);
