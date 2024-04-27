const sites = [
	{name: "Facebook", linkk: "https://facebook.com/duckafire"},
	{name: "Tic80",    linkk: "https://tic80.com/dev?id=8700"},
	{name: "GitHub",   linkk: "https://github.com/duckafire"},
	{name: "Itch.io",  linkk: "https://duckafire.itch.io"},
];

Title.innerHTML   = "Hello World!";
Welcome.innerHTML = "This site is a mess and, probably, it will to look like this for a \"\"\"little time\"\"\" <s>(really i'm lousy with sites)</s>.";
About.innerHTML   = "In below you can find some <i>links</i><br>related my work:";

if(Html.lang == "pt"){
	Title.innerHTML   = "Olá mundo!"
	Welcome.innerHTML = "Esse site está uma bagunça e, provavelmente, vai ficar assim por um \"\"\"tempinho\"\"\" <s>(realmente sou péssimo com sites)</s>.";
	About.innerHTML   = "Abaixo você poderá encontrar alguns <i>links</i><br>relacionados ao meu trabalho:";
}

// Title.innerHTML   = CSTR[0].title;
// Welcome.innerHTML = CSTR[0].welcome;
// About.innerHTML   = CSTR[0].about;

// if(Html.lang == "pt"){
	// Title.innerHTML   = CSTR[1].title;
	// Welcome.innerHTML = CSTR[1].welcome;
	// About.innerHTML   = CSTR[1].about;
// }

for(let i = 0; i <= 3; i++){
	let _link = document.createElement("a");
	
	_link.href           = sites[i].linkk;
	_link.innerHTML      = "<br>" + sites[i].name;
	_link.style.position = "relative";
	_link.style.top      = inPx(10 + 10 * i);
	
	_link.style.color    = "#ffbb00";
	if(CurTheme == "dark") _link.style.color = "#41008a";
	
	About.appendChild(_link);
}
