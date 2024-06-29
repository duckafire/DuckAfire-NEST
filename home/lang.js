// en-US by default
let userLang = navigator.language || navigator.userLanguage;
let force_enUS = false;

// pt-BR
if(!force_enUS && userLang.charAt(0) == 'p' && userLang.charAt(1) == "t"){

// LINKS TO PARAGRAPHS
const lnews = [null];
const lproj = [null, null, null];

(function(){
	let max = ((lnews.length > lproj.length) ? lnews.length : lproj.length);

	const text = [
		["Legendary Champion: Rebirth"],
		["TinyLibrary", "Tic80", "Legendary Champion: Rebirth"]
	];
	const link = [
		["github.com/duckafire/TinyLibrary"],
		["tic80.com", "github.com/duckafire/LIM", "tic80.com/play?cart=3315"]
	];

	for(let i = 0; i < max; i++){
		if(i < lnews.length){
			lnews[i] = document.createElement('a');         // create link element
			lnews[i].href        = "https://" + link[0][i]; // set link
			lnews[i].textContent = text[0][i];              // set text
		}
		if(i < lproj.length){
			lproj[i] = document.createElement('a');
			lproj[i].href        = "https://" + link[1][i];
			lproj[i].textContent = text[1][i];
		}
	}
})();

// SET PARAGRAPHS CONTENTE (text)
const texts = [null, null, null, null, null, null];
const tags = ["tMain", "pWelcome", "tNews", "pNotice", "tProjects", "pProjects"];
for(let i = 0; i < tags.length; i++) texts[i] = document.getElementById(tags[i]);

(function(){
	// text link ("a")
	function texts_linkToObject(id, msg, link){
		let child = 0;
		texts[id].textContent = "";

		for(let i = 0; i < msg.length; i++){
			if(msg.charAt(i) == '\0'){
				// add link object
				texts[id].appendChild(link[child]);
				child++;
				continue;
			}

			texts[id].textContent += msg.charAt(i);
		}
	}

	// get user browser language
	texts[0].textContent = "Bem vindo ao meu ninho!";
	texts[1].textContent = "Olá, eu sou DuckAfire, um desenvolvedor de jogos independente.\nNessa página, você poderá ver mais sobre o meu trabalho.";

	texts[2].textContent = "Notícias";
	//texts[3].textContent = "<b>[22.06.2024]</b> - A versão v3.0.0 do \n" + lnews[0] + " já está disponível!";
	texts_linkToObject(3,  "<b>[22.06.2024]</b> - A versão v3.0.0 do \n\0 já está disponível!", lnews);
	
	texts[4].textContent = "Projetos";
	//texts[5].textContent = lproj[0] + " - Coleção de bibliotecas para o " + lproj[1] + "\n" + lproj[2] + " - <b>L</b>ua L<b>i</b>brary Co<b>m</b>pactor\n" + lnews[0] + " - Jogo de console de fantasia";
	texts_linkToObject(5,  "\0 - Coleção de bibliotecas para o \0\n\0 - <b>L</b>ua L<b>i</b>brary Co<b>m</b>pactor\n" + lnews[0] + " - Jogo de console de fantasia", lproj);
})();

} // END
