//document.addEventListener("DOMContentLoaded", () => {
(function(){
	// SECTION
	const lb = document.createElement("section");
	lb.id = "lb";

	// ICON TO BURGER MENU
	const bmIcon = document.createElement("i");
	bmIcon.id = "lb-bmIcon";
	bmIcon.className = "fa-solid fa-bars";

	// LINKS LIST
	const ldiv = document.createElement("div");
	ldiv.id = "lb-links";

	const toIcons = [
		["github.com/duckafire",          "github"  ],
		["duckafire.itch.io",             "itch-io" ],
		["facebook.com/duckafire",        "facebook"],
		["tic80.com/dev?id=8700",         "gamepad" ],
		["github.com/sponsors/duckafire", "donate"  ],
	];

	let link = null, icon = null, type = "";

	for(let i = 0; i < 5; i++){
		link = document.createElement("a");
		link.target = "_blank"
		link.href = "https://" + toIcons[i][0];
		link.className = "lb-link";

		type = (i < 3) ? "brands" : "solid";

		icon = document.createElement("i");
		icon.className = "fa-" + type + " fa-" + toIcons[i][1] + " lb-link-icon";

		link.appendChild(icon);
		ldiv.appendChild(link);
	}

	// ADD TO HTML
	document.getElementById("div-lb").appendChild(lb);
	lb.appendChild(bmIcon);
	lb.appendChild(ldiv);
})();
