const SocialMedia = {
	id: 0,
	opened: false,
	icon: document.getElementById("social-media"),
	classes: ["github", "itch-io", "facebook", "gamepad"],
	anim: function(it){
		if(it.opened) return;
		
		let group = "brands";
		if(it.id == 3) group = "solid";

		it.icon.className = "fa-" + group + " fa-" + it.classes[it.id];
		it.id++;
		if(it.id > 3) it.id = 0;
	},
	/*panel: function(){
		const pos = this.getBoundingClientRect();
		const panel = document.getElementById("social-media-panel");
		panel.hidden = false;
		panel.style.top  = "8vh";
		panel.style.left = pos.y + "px";//(Number(pos.y) + 1).toStrin() + "px";
	},*/
};

setInterval(SocialMedia.anim, 2500, SocialMedia);
//SocialMedia.icon.addEventListener("click", SocialMedia.panel);
