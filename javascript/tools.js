// specific objects
this.DivMain  = document.getElementById("main");
this.Title    = document.getElementById("title");
this.Welcome  = document.getElementById("welcome");
this.About    = document.getElementById("about");


// about language
this.Html = document.querySelector("html");


// about page theme (light/dark)
this.CurTheme  = "light";


// read .json files
let CSTR = null;
fetch("https://duckafire.github.io/nest/javascript/json-files/const-strings.json")
	.then((response) => response.json())
		.then((jsonFile) => {CSTR = jsonFile; console.log(CSTR)});

// common funtions (small library)
this.inPx = (value = 0) => String(Math.floor(value)) + "px";

