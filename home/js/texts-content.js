function date(month, day){
	let adj0 = "", adj1 = "";
	
	if(month < 10) adj0 = "0"
	if(day   < 10) adj1 = "0"

	// 2024 / [0] month / [0] day - 
	return "2024/" + adj0 + (month).toString() + "/" + adj1 + (day).toString() + " - ";
}

function iconCtt(id){
	// PORTUGUESE
	if(id == 0){
		return [
			"Meus repositórios",
			"Meus jogos indie",
			"Tipo um blog",
			"Cartuchos para o Tic80"
		];
	}

	return [
		"My repositories",
		"My indie games",
		"Like a blog",
		"Catridges to Tic80"
	];
}

function welcCtt(id){
	// PORTUGUESE
	if(id == 0){
		return [
			"Olá Mundo",
			"Eu sou DuckAfire, um desenvolvedor de jogos "   +
			"indies em contante processo de aprendizado. "   +
			"Usuário das linguagens de programação: Lua, C " +
			"e JavaScript. Atualmente eu estou trabalhando"  +
			"em TRÊS projetos:"
		]
	}

	// ENGLISH
	return [
		"Hello World!",
		"I'm DuckAfire, a indie game developer in "      +
		"constant process of learning. User of the "     +
		"programming languages: Lua, C and JavaScript. " +
		"Currently I'm working in THREE projects:"
	];
}

function newsCtt(id){
	let allDt = [date(9, 1), date(7, 13), date(7, 9), date(6, 22)]

	// PORTUGUESE
	if(id == 0){
		return [[
			allDt[0] + "TinyLibrary [ v4.0.0 ]: A New Face",
			"A maior atualização da TinyLibrary (até agora) CHEGOU! Refatoração "   +
			"TOTAL (!), novos recursos foram implementados e velhos recursos "      +
			"foram melhorados, as mensagens de erro tornaram-se mais específicas, " +
			"tudo ficou mais claro e de fácil compreensão."
		],[
			allDt[1] + "Lim atualização v0.1.11",
			"A nova versão estável do Lim está disponível! Diversos recursos " +
			"foram implementados e bugs foram corrigigos. Agora é possível "   +
			"\"proteger\" nomes de funções e muitas outras coisas. Criar"      +
			"bibliotecas minúsculas está mais fácil."
		],[
			allDt[2] + "Legendary Champions atualização v3.0.1",
			"Diversos novos conteúdos chegaram ao jogo! Novos efeitos sonoros, " +
			"ajustes, correções de bugs e MUITO MAIS. Jogue a nova atualização " +
			"em minha página no Tic80!"
		],[
			allDt[3] + "O RENASCIMENTO de Legendary AMONGUS",
			"Essa atualização é um grande retrabalho no jogo. Inimigos "        +
			"ganharam uma nova IA, mapas ganharam novos layouts, as animações " +
			"estão mais bonitas, o jogo foi renomeado e MAIS. Todo o código "   +
			"do jogo foi reescrito do ZERO, mas todas a essência foi mantida."
		]];
	}

	// ENGLISH
	return [[
		allDt[0] + "TinyLibrary [ v4.0.0 ]: A New Face",
		"The biggest update of the TinyLibrary (so far) WAS ARRIVE! TOTAL "   +
		"refatoration, new resource were implemented, old resources were " +
		"improved, the error messages become more specifies, all were"     +
		"become clearer and of easy understanding."
	],[
		allDt[1] + "Lim update v0.1.11",
		"The new stable version of the Lim is avaliable. Several resources "   +
		"are implemented and bugs were fixes. Now it is possible \"protect\" " +
		"functions names and a lot of other things. Create tiny libraries is " +
		"more easy."
	],[
		allDt[2] + "Legendary Champion update v3.0.1",
		"A lot of new content were come to the game! New sound effects, "  +
		"adjustments, bug fixes and MANY MORE. Play the new update in my " +
		"page on Tic80!"
	],[
		allDt[3] + "The REBIRTH of Legendary AMONGUS",
		"This update is a BIG rework of the game. Enemies given a new AI, "   +
		"maps given new layouts, the animations are most beatiful, the game " +
		"was renamed and MORE. All game code was re-writed from ZERO, but "   +
		"all essence was maintained."
	]];
}

// summary
function setAllTextContent(id){
	iconContent = iconCtt(id);
	welcContent = welcCtt(id);
	newsContent = newsCtt(id);
}
