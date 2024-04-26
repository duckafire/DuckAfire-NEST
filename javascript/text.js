var title   = document.getElementById("title");
var welcome = document.getElementById("welcome");
var about   = document.getElementById("about");
var sites = [
	{name: "Facebook", linkk: "https://facebook.com/duckafire"},
	{name: "Tic80",    linkk: "https://tic80.com/dev?id=8700"},
	{name: "GitHub",   linkk: "https://github.com/duckafire"},
	{name: "Itch.io",  linkk: "https://duckafire.itch.io"},
];

title.innerHTML   = "Olá mundo!"
welcome.innerHTML = "Esse site está uma bagunça e, provavelmente, vai ficar assim por um \"\"\"tempinho\"\"\" <s>(realmente sou péssimo com sites)<s>.";
about.innerHTML   = "Abaixo você poderá encontrar alguns <i>links</i><br>relacionados ao meu trabalho:";

for(var i = 0; i <= 3; i++){
	var _link = document.createElement("a");
	
	_link.href           = sites[i].linkk;
	_link.innerHTML      = "<br>" + sites[i].name;
	_link.style.color    = "#41008a";
	_link.style.position = "relative";
	_link.style.top      = inPx(10 + 10 * i);
	
	about.appendChild(_link);
}
