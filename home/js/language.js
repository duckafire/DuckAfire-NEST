let newsContent = null;

let language = navigator.language || navigator.userLanguage;
console.log(language[0]);
if(true && language[0] == 'p' && language[1] == 't'){
	// APRESENTATION
	document.getElementById("mainTitl").textContent = "Olá Mundo";
	// no tab (for now)
	document.getElementById("mainPara").textContent = "Eu sou DuckAfire, um desenvolvedor de jogos indies em contante processo de aprendizado. Usuário das linguagens de programação: Lua, C e JavaScript. Atualmente eu estou trabalhando em TRÊS projetos:";

	// SOCIAL ICONS
	let social = document.getElementById("social-media").children;
	let titles = ["Meus repositórios", "Meus jogos indie", "Tipo um blog", "Cartuchos para o Tic80"];
	for(let i = 0; i < social.length; i++)
		social[i].title = titles[i];

	// NEWS
	newsContent = [
		["2024/07/13 - Lim atualização v0.1.11", "A nova versão estável do Lim está disponível! Diversos recursos foram implementados e bugs foram corrigigos. Agora é possível \"proteger\" nomes de funções e muitas outras coisas. Criar bibliotecas minúsculas está mais fácil."],
		["2024/07/09 - Legendary Champions atualização v3.0.1", "Diversos novos conteúdos chegaram ao jogo! Novos efeitos sonoros, ajustes, correções de bugs e MUITO MAIS. Jogue a nova atualização em minha página no Tic80!"],
		["2024/06/22 - O RENASCIMENTO de Legendary AMONGUS", "Essa atualização é um grande retrabalho no jogo. Inimigos ganharam uma nova IA, mapas ganharam novos layouts, as animações estão mais bonitas, o jogo foi renomeado e MAIS. Todo o código do jogo foi reescrito do ZERO, mas todas a essência foi mantida."],
	];
}else{
	newsContent = [
		["2024/07/13 - Lim update v0.1.11", "The new stable version of the Lim is avaliable. Several resources are implemented and bugs were fixes. Now it is possible \"protect\" function anmes and a lot of other things. Create tiny libraries is more easy."],
		["2024/07/09 - Legendary Champion update v3.0.1", "A lot of new content were come to the game! New sound effects, adjustments, bug fixes and MANY MORE. Play the new update in my page on Tic80!"],
		["2024/06/22 - The REBIRTH of Legendary AMONGUS", "This update is a BIG rework of the game. Enemies given a new AI, maps given new layouts, the animations are most beatiful, the game was renamed and MORE. All game code was re-writed from ZERO, but all essence was maintained."]
	];
}
