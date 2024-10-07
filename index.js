const SocialMedia = {
	id: 0,
	icon: document.getElementById("social-media"),
	iconBg: document.getElementById("social-panel-background"),
	classes: ["github", "itch-io", "facebook", "gamepad"],
	anim: function(it){
		let group = "brands";
		if(it.id == 3) group = "solid";

		it.icon.className = "cursor-hand fa-" + group + " fa-" + it.classes[it.id];
		it.id++;
		if(it.id > 3) it.id = 0;
	},
};

setInterval(SocialMedia.anim, 2500, SocialMedia);
SocialMedia.icon.addEventListener("click", () => {SocialMedia.iconBg.hidden = false;})
SocialMedia.iconBg.addEventListener("click", () => {SocialMedia.iconBg.hidden = true;});
document.getElementById("social-panel-shape").addEventListener("click", (event) => {event.stopPropagation();});
document.getElementById("donate").addEventListener("click", () => {window.open("https://github.com/sponsors/duckafire");});
