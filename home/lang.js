// en-US by default
let userLang = navigator.language || navigator.userLanguage;

// pt-BR ; first is debug
if(true && userLang.charAt(0) == 'p' && userLang.charAt(1) == "t"){
	// TEXT
	let content = [
		// main (welcome)
		["tMain",    "Bem vindo ao ninho!"],
		["pMain-0",  "Olá, eu sou DuckAfire, um desenvolvedor de jogos indie."],
		["pMain-1",  "Aqui você poderá ver mais sobre o meu trabalho."],

		// news
		["tNews",     "Notícias"],

		["pNews-0-0", "13.07"],
		["pNews-0-1", "LIM atualização v0.1.11:"],
		["pNews-0-2", "Novo prefixo para adicionar funções à tabela da biblioteca"],
		["pNews-0-3", "Nomes de funções podem ser protegidos"],
		["pNews-0-4", "Funções da biblioteca podem ser usada dentro da mesma"],
		["pNews-0-5", "E MAIS!"],

		["pNews-1-0", "09.07"],
		["pNews-1-1", "Legendary Champion atualização v3.0.1:"],
		["pNews-1-2", "Efeitos sonoros"],
		["pNews-1-3", "Ajustes nos mapas"],
		["pNews-1-4", "Várias correções"],
		["pNews-1-5", "E MAIS!"],

		["pNews-2-0", "22.06"],
		["pNews-2-1", "A versão v3.0.0 do "],
		["pNews-2-2", "já está disponível!"],

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
