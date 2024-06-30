// en-US by default
let userLang = navigator.language || navigator.userLanguage;

// pt-BR ; first is debug
if(true && userLang.charAt(0) == 'p' && userLang.charAt(1) == "t"){
	// TEXT
	let content = [
		// main (welcome)
		["tMain",    "Bem vindo ao ninho!"],
		["pMain-0",  "Olá, eu sou DuckAfire, um desenv. de jogos indie."],
		["pMain-1",  "Aqui você poderá ver mais sobre o meu trabalho."],

		// news
		["tNews",   "Notícias"],
		["pNews-0", "[22.06.2024]"],
		["pNews-1", "A versão v3.0.0 do"],
		["pNews-2", "já está disponível!"],

		// noti (notices)
		["tProj",   "Projetos"],
		["pProj-0", "Coleção de bibliotecas para o"],
	];
	
	// change content
	for(let i = 0; i < content.length; i++){
		document.getElementById(content[i][0]).textContent = content[i][1];
	}

	// RESIZE
	let value = [
		["dMain", "100"],
	];

	for(let i = 0; i < value.length; i++){
		document.getElementById(value[i][0]).height = value[i][1] + "px";
	}

} // END
