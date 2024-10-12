// LINKS BAR
(function(){
	// section
	const lb = document.createElement("section");
	lb.id = "lb";

	// icon to burger menu
	const bmIcon = document.createElement("i");
	bmIcon.id = "lb-bmIcon";
	bmIcon.className = "fa-solid fa-bars";
	bmIcon.addEventListener("click", () => {
		document.getElementById("bm").hidden = false;
		document.getElementById("div-bm").hidden = false;
	});

	// links list
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

	// add to html
	document.getElementById("div-lb").appendChild(lb);
	lb.appendChild(bmIcon);
	lb.appendChild(ldiv);
})();

// BURGER MENU
(function(){
	// main div
	const bmDiv = document.getElementById("div-bm");
	bmDiv.addEventListener("click", (event) => {
		event.stopPropagation();
	});

	// section
	const bm = document.createElement("section");
	bm.id = "bm";
	bm.className = "bm-on-screen";
	
	// to close it
	const divXMark = document.createElement("div");
	divXMark.id = "bm-div-x-mark";

	const xMark = document.createElement("i");
	xMark.id = "bm-x-mark";
	xMark.className = "fa-regular fa-circle-xmark";
	xMark.addEventListener("click", () => {
		bmDiv.hidden = true;
		bm.hidden = true;
	});

	const items = document.createElement("div");
	items.id = "bm-items";

	divXMark.appendChild(xMark);

	// add to html
	bmDiv.appendChild(bm);
	bm.appendChild(items);
	bm.appendChild(divXMark);

	// links
	const titles = [
		["News", "Changelogs"],
		["Repository", "License", "By DuckAfire"]
	];

	const faToLinks = ["newspaper", "file"];

	const links = ["page-links", "links-to-gh"]

	let credits = false;
	let ul = null, li = null, a = null, em = null, ic = null, span = null;

	for(let i = 0; i < 2; i++){
		ul = document.createElement("ul");
		ul.id = links[i];
		
		for(let j = 0; j < titles[i].length; j++){
			// to other content in self site
			li = document.createElement("li");

			if(i == 0){
				ic = document.createElement("i");
				ic.className = "fa-solid fa-" + faToLinks[j];
				li.appendChild(ic);
			}

			span = document.createElement("span");
			span.textContent = titles[i][j];

			li.appendChild(span);

			// click events
			if(i == 0){
				switch(j){
					case 0: // news
						li.addEventListener("click", () => {
							location.reload();
						});
						break;
					case 1: // changelogs
						li.addEventListener("click", () => {
							location.reload();
						});
						break;
				}
			}

			// save item on list
			credits = (i == 1 && j == 2)
			if(i == 0 || credits){
				if(!credits){
					ul.appendChild(li);
					continue;
				}

				em = document.createElement("em");
				em.appendChild(li);
				ul.appendChild(em);
				continue;
			}

			// to repository
			li.textContent = "";

			a = document.createElement("a");
			a.textContent = titles[i][j];
			a.target = "_blank";
			a.href = "https://github.com/duckafire/nest" + ((j == 1) ? "/blob/online/LICENSE" : "");

			a.appendChild(li);
			ul.appendChild(a);
		}
		
		items.appendChild(ul);
	}
})();
