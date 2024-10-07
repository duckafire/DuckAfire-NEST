const TextContent = [[
		document.getElementById("hello-world-title"),
		document.getElementById("hello-world-content"),
	], [
		document.getElementById("projects-title"),
		document.getElementById("projects-content"),
	], [
		document.getElementById("last-news-title"),
		document.getElementById("last-news-content"),
]];

function LanguagePT(l){ // pt-BR
	l[0][0].textContent = "Olá mundo!";
	l[0][1].innerHTML   = "Seja bem vindo ao meu ninho!<br>Aqui quem escreve " +
	"é o pato charmoso da foto acima :D" +
	"<br><br>" +
	"Meu nome é <strong>DuckAfire</strong>, sou um densenvolvedor de jogos " +
	"<em>indie</em> que adora desafios e <em>pixel art</em>, ama <em>Lua"    +
	"</em> e <strong> adora</strong> odiar <em>CSS</em>." +
	"<br><br>" +
	"Aqui nesse <em>website</em> você poderá encontrar <strong>tudo"   +
	"</strong> relacionado ao meu trabalho, como <em>links</em>, <em>" +
	"changelogs</em> e outros semelhantes.";

	l[1][0].textContent = "Projetos";
	l[1][1].innerHTML   = "Não hesite em clicar nos <em>links</em> abaixo " +
	"para obter informações detalhadas sobre cada um dos projetos.";

	l[2][0].textContent = "Últimas notícias";
	l[2][1].innerHTML   = "Depois de um longo perído de espera, finalmente chegou! " +
	"<strong>Legendary Champion <u>v3.0.2</u>!!</strong> Uma atualização que veio "  +
	"para facilitar a criação de NOVAS atualizações, deixar as coias mais belas e "  +
	"tornar a vida do <em>nosso</em> pequeno \"astronauta\" <strong>mais difícil!"   +
	"</strong>." +
	"<br><br>" +
	"As principais mudanças dessa atualização incluem:" +
	"<br><br>" +
	"* Retrabalho nas <em>IA</em> do Observador e do Supervisor.<br>" +
	"* NOVOS efeitos sonoros (+agradáveis).<br>" +
	"* Diversa pequenas melhorias e correções visuais.<br>" +
	"* Melhorias e correções técnicas.<br>" +
	"* Omitização.<br>" +
	"* <strong>E MAIS!</strong>";
}

function LanguageEN(l){ // en-US
	l[0][0].textContent = "Hello world!";
	l[0][1].innerHTML    = "Welcome to my nest!<br>The writer is the charming " +
	"duck in the photo above :D" +
	"<br><br>" +
	"My name is <strong>DuckAfire </strong>, I'm an indie game developer that "    +
	"love challenges and pixel art, I like <em>Lua</em> and <strong>love</strong>" +
	"to hate <em>CSS</em>." +
	"<br><br>" +
	"Here in this website you can to find <strong>all</strong> about my work, " +
	"like links, changelogs and other similar.";
	
	l[1][0].textContent = "Projects";
	l[1][1].innerHTML    = "Do not hesitate in click in the links on below " +
	"to get detailed informations about each one of the projects.";

	l[2][0].textContent = "Last news";
	l[2][1].innerHTML    = "After a long wait period, finaly it arrive! <strong>"  +
	"Legendary Champion <u>v3.0.2</u></strong>!! An update that arrive to easily " +
	"the creation of NEW updates, become the somethings more beatiful and become " +
	"the life of <em>our</em> little \"astronaut\" <strong>more hard!</strong>."   +
	"<br><br>" +
	"The main changes of this update include:" +
	"<br><br>" +
	"* Remork in Observer and Supervisor <em>AI</em>.<br>" +
	"* NEW sound effects (+pleasant).<br>" +
	"* Several small visual improves and fixed.<br>" +
	"* Technical improves and fixes.<br>" +
	"* Optimization.<br>" +
	"* <strong>And MORE!</strong>.<br>";
}
