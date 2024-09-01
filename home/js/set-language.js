function updateTextContent(){
	// ICONS title
	let icon = document.getElementById("social-media").children;
	for(let i = 0; i < icon.length; i++)
		icon[i].title = iconContent[i];

	// WELCOME message
	let welc = ["Titl", "Para"];
	for(let i = 0; i < 2; i++)
		document.getElementById("main" + welc[i]).textContent = welcContent[i];

	// NEWS (headers and paragraphs)
	for(let i = 0; i < news.children.length; i++){
		for(let j = 0; j < 2; j++)
			news.children[i].children[j].textContent = newsContent[i][j];
	}
}

// AUTO (in boot)
switch((navigator.userLanguage || navigator.language).slice(0, 2)){
	case "pt":
		setAllTextContent(0);
		break;
	default:
		setAllTextContent(-1);
}
updateTextContent();

// MANUALLY
function setLanguage(){
	curLangID++;
	if(curLangID > MAX_LANG_ID)
		curLangID = -1;

	setAllTextContent(curLangID);
	updateTextContent();
}
