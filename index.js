const PageValues = {
	language: (navigator.userLanguage || navigator.language).slice(0, 2) == "pt",
	lightScheme: window.matchMedia("(prefers-color-scheme: light)").matches,
	setLanguage: function(){
		PageValues.language = !PageValues.language;

		if(PageValues.language){
			LanguagePT(TextContent);
			return;
		}

		LanguageEN(TextContent)
	},
};

if(PageValues.language){
	LanguagePT(TextContent);
}else{
	LanguageEN(TextContent);
}

const BurgerMenu = document.getElementById("burger-menu");
const Donate     = document.getElementById("donate");
const GlobeLang  = document.getElementById("language");

const SocialMediaPanel = {
	bg:    document.getElementById("social-panel-background"),
	shape: document.getElementById("social-panel-shape"),
	icon:  document.getElementById("social-media"),

	id: 0,
	group: "brands",
	classes: ["github", "itch-io", "facebook", "gamepad"],
	iconAnim: function(it){
		it.group = "brands";
		if(it.id == 3) it.group = "solid";

		it.icon.className = "cursor-hand fa-" + it.group + " fa-" + it.classes[it.id];

		it.id++;
		if(it.id > 3) it.id = 0;
	},
};

const DrawerContent = [
	document.getElementById("section-hello-world"),
	document.getElementById("section-projects"),
	document.getElementById("section-last-news"),
];

DrawerContent[0].children[0].hidden = false;

Donate.addEventListener("click", () => {window.open("https://github.com/sponsors/duckafire");});

window.setInterval(SocialMediaPanel.iconAnim, 2500, SocialMediaPanel);
SocialMediaPanel.bg.addEventListener(   "click", () => {SocialMediaPanel.bg.hidden = true; });
SocialMediaPanel.shape.addEventListener("click", (event) => {event.stopPropagation();});
SocialMediaPanel.icon.addEventListener( "click", () => {
	SocialMediaPanel.bg.hidden = !SocialMediaPanel.bg.hidden;
	for(let i = 0; i < 3; i++)
		DrawerContent[i].children[1].hidden = true;
})

for(let i = 0; i < 3; i++){
	DrawerContent[i].children[0].addEventListener("click", (event) => {
		event.currentTarget.parentNode.children[1].hidden = !event.currentTarget.parentNode.children[1].hidden;
	});
}

GlobeLang.addEventListener("click", PageValues.setLanguage);
