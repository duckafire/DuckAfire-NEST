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
		["Home", "News", "Changelogs"],
		["Repository", "License", "By DuckAfire"]
	];

	const faToLinks = ["home", "newspaper", "file"];

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
				function update(a, b, c){
					if(a.style.display == "flex") return;
					a.style.display = "flex";
					b.style.display = "none";
					c.style.display = "none";

					bmDiv.hidden = true;
					bm.hidden = true;
				}

				switch(j){
					case 0: // home
						li.addEventListener("click", () => {update(CO, NE, CH);});
						break;
					case 1: // news
						li.addEventListener("click", () => {update(NE, CO, CH);});
						break;
					case 2: // changelogs
						li.addEventListener("click", () => {update(CH, CO, NE);});
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

// NEW AND CHANGELOGS
(function(){
	let details = null, summary = null, h2 = null, divBg = null, divCtt = null;

	function blank(secId){
		divBg = document.createElement("div");
		divBg.style.height = "6vh";
		document.getElementById(secId).appendChild(divBg);
	}

	function newItem(secId, title, content){
		details = document.createElement("details");
		summary = document.createElement("summary");
		h2      = document.createElement("h2");
		divBg   = document.createElement("div");
		divCtt  = document.createElement("div");

		h2.className     = "details-title";
		divBg.className  = "details-container";
		divCtt.className = "details-content";

		h2.textContent = title;
		divCtt.textContent = content;

		divBg.appendChild(divCtt);
		summary.appendChild(h2);
		details.appendChild(summary);
		details.appendChild(divBg);
		document.getElementById(secId).appendChild(details);
	}

	let ids    = ["ne", "ch"];
	let titles = ["news ", "changelogs "];

	for(let i = 0; i < 2; i++){
		blank(ids[i]);

		for(let j = 0; j < 5; j++){
			newItem(ids[i], titles[i] + j.toString(),
				"Lorem ipsum senectus ante nam ligula orci rutrum" +
				"lacus, nulla posuere velit ut tincidunt eleifend" +
				"lacus blandit maecenas, est duis magna fames" +
				"tortor adipiscing magna. vehicula platea dolor at" +
				"pellentesque lectus viverra ante eros, id torquent" +
				"donec lobortis tristique placerat ut diam proin," +
				"rutrum convallis a tortor duis ut vehicula. ut" +
				"mollis sed tincidunt a rutrum purus laoreet vivamus" +
				"lacus aenean nisi dolor purus dapibus ultricies sit," +
				"nisl inceptos convallis vivamus sociosqu lacinia" +
				"primis turpis pretium eget aenean hendrerit posuere" +
				"scelerisque. vestibulum convallis sagittis ut nibh" +
				"vehicula ligula non laoreet massa, ligula nullam ac" +
				"justo taciti ullamcorper aenean justo nam quisque," +
				"faucibus viverra felis cras himenaeos aenean at" +
				"faucibus."
			);
		}
	}
})();

