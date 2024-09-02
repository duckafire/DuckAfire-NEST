// SET LANGUAGE
function updateTextContent(){
	// icons title
	let icon = document.getElementById("social-media").children;
	for(let i = 0; i < icon.length; i++)
		icon[i].title = iconContent[i];

	// welcome message
	let welc = ["Titl", "Para"];
	for(let i = 0; i < 2; i++)
		document.getElementById("main" + welc[i]).textContent = welcContent[i];

	// news (headers and paragraphs)
	for(let i = 0; i < NEWS.children.length; i++){
		for(let j = 0; j < 2; j++)
			NEWS.children[i].children[j].textContent = newsContent[i][j];
	}

	// set language icon
	let img = ["united-states", "brazil"];
	LANG.src = "img/" + img[curLangID + 1] + ".png";
}

// auto (in boot)
switch((navigator.userLanguage || navigator.language).slice(0, 2)){
	case "pt":
		curLangID = 0;
		setAllTextContent(0);
		break;
	default:
		setAllTextContent(-1);
}
updateTextContent();

// manually
function setLanguage(){
	curLangID++;
	if(curLangID > MAX_LANG_ID)
		curLangID = -1;

	setAllTextContent(curLangID);
	updateTextContent();
}

// OPEN/CLOSE NEWS CONTENT
(function(){
	let titl = null;
	let para = null;
	let itself = null;

	for(let i = 0; i < NEWS.children.length; i++){
		titl = NEWS.children[i].children[0]; // h4
		
		function openContent(){
			para = this.parentElement.children[1]; // p
			if(para.hidden){
				para.hidden = false;
				return;
			}
			para.hidden = true;
		}

		function swapColors(){
			if(this.style.background == "rgb(31, 31, 31)"){
				this.style.background = "#3a3a3a";
				this.style.color      = "#ddd";
				return;
			}

			this.style.background = "#1f1f1f";
			this.style.color      = "#bbb";
		}

		titl.addEventListener("click",     openContent);
		titl.addEventListener("mouseover", swapColors);
		titl.addEventListener("mouseout",  swapColors);
	}
})();

LANG.addEventListener("click", setLanguage);
