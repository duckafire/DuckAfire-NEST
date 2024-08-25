const news = document.getElementById("news");

const content = [
	["2024/07/13 - Lim update v0.1.11", "The new stable version of the Lim is avaliable. Several resources are implemented and bugs were fixes. Now it is possible \"protect\" function anmes and a lot of other things. Create tiny libraries is more easy."],
	["2024/07/09 - Legendary Champion update v3.0.1", "A lot of new content were come to the game! New sound effects, adjustments, bug fixes and MANY MORE. Play the new update in my page on Tic80!"],
	["2024/06/22 - The REBIRTH of Legendary AMONGUS", "This update is a BIG rework of the game. Enemies given a new AI, maps given new layouts, the animations are most beatiful, the game was renamed and MORE. All game code was re-writed from ZERO, but all essence was maintained."]
];

let titl = null;
let para  = null;
for(let i = 0; i < content.length; i++){
	// 0 = titl | 1 = paragraph
	titl = document.createElement("h4");
	titl.textContent = content[i][0];

	para = document.createElement("p");
	para.textContent = content[i][1];
	para.style.position = "relative";
	para.style.top = "-20px";
	// para.setAttribute("hidden", true);

	news.appendChild(titl);
	news.appendChild(para);
}

news.removeAttribute("hidden");
