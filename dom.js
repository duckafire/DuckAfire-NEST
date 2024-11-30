(function(){
	const mom = document.getElementById("main-projects");
	const projBox = "project-box", projLink = "project-link";
	
	const info = [
		// title, image, description, "link name, link icon, link," (x2)
		[
			"Legendary Champion: Rebirth", "legendary-champion-cover",
			"\"Entre na A Arena e megulher em um desafrio frenético, onde seu "+
			"único objetivo é proteger as suas CARGAS. Fuja e esconda-se de inimigos "+
			"únicos e incansáveis. Corra em direção a glória da vitória!\"",
			[["Jogue em tic80.com", "fa-solid fa-gamepad",  "https://tic80.com/play?cart=3315"], ["Jogue em itch.io",   "fa-brands fa-itch-io", "https://duckafire.itch.io/legendary-champion"]]
		], [
			"Tiny Library", "tinylibrary-icon",
			"\"Esta é uma coleção de bibliotecas gratuitas e de código aberto, criada "+
			"para facilitar a criação de novos cartuchos para o Tic80 Tiny Computer\"",
			[["Repositório", "fa-solid fa-folder", "https://github.com/duckafire/TinyLibrary"], ["Wikipédia",   "fa-solid fa-book",   "https://github.com/duckafire/TinyLibrary/wiki"]]
		], [
			"Lim", "lim-icon",
			"\"Lua library compactor (compactador de bibliotecas Lua) é um pequeno "+
			"programa de terminal, criado para facilitar a compactação de bibliotecas "+
			"Lua [para o projeto TinyLibrary] em um formato apelidade de Pacote Local\"",
			[["Repositório",   "fa-solid fa-folder", "https://github.com/duckafire/LIM"], ["Linguagem Lua", "fa-solid fa-book",   "https://lua.org"]],
		]
	];

	let div, img;
	let tdiv, h2, p;
	let adiv, aa, ai, as;

	for(let i = 0; i < info.length; i++){
		div = document.createElement("div");
		img = document.createElement("img");
		tdiv= document.createElement("div");
		h2  = document.createElement("h2");
		p   = document.createElement("p");
		adiv= document.createElement("div");

		div.className  = projBox;
		h2.textContent = info[i][0];
		img.src        = "./img/project-" + info[i][1] + ".png";
		p.textContent  = info[i][2];
		adiv.className = projLink;

		for(let j = 0; j < 2; j++){
			aa = document.createElement("a");
			ai = document.createElement("i");
			as = document.createElement("span");

			aa.href        = info[i][3][j][2];
			ai.className   = info[i][3][j][1];
			as.textContent = info[i][3][j][0];

			aa.appendChild(ai);
			aa.appendChild(as);
			adiv.appendChild(aa);
		}

		mom.appendChild(div);
		div.appendChild(img);
		div.appendChild(tdiv);
		div.appendChild(adiv);
		tdiv.appendChild(h2);
		tdiv.appendChild(p);
	}
})();
