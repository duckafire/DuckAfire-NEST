function hideSocialIcons(){
	if(ABOUT_DUCK_SOCIAL_ICONS.style.display != "none"){
		ABOUT_DUCK_SOCIAL_ICONS.style.display = "none";
		ABOUT_DUCK_MORE_BUTTON.style.marginTop = "0.85rem";
		return;
	}

	ABOUT_DUCK_SOCIAL_ICONS.style.display = "flex";
	ABOUT_DUCK_MORE_BUTTON.style.marginTop = "0.375rem";
}

function showMoreInfoAboutDuck(){
	let textContent = ABOUT_DUCK_MORE_BUTTON.textContent;

	if(textContent.includes("mais"))
		textContent = textContent.replace("mais", "menos");
	else
		textContent = textContent.replace("menos", "mais");

	ABOUT_DUCK_MORE_BUTTON.textContent = textContent;

	ABOUT_DUCK_MORE.hidden = !ABOUT_DUCK_MORE.hidden;
}

function showMoreProjects(){
	const end = PROJECT_BODY_MORE.children.length - 1;

	for(let i = 0; i < end; i++){
		if(PROJECT_BODY_MORE.children[i].style.display == "none")
			PROJECT_BODY_MORE.children[i].style.display = "";
		else
			PROJECT_BODY_MORE.children[i].style.display = "none";
	}

	// ... > DIV > div > i
	let className = PROJECT_BODY_MORE.children[end].children[0].children[0].className;

	if(className.includes("down"))
		className = className.replace("down", "up");
	else
		className = className.replace("up", "down");

	PROJECT_BODY_MORE.children[end].children[0].children[0].className = className;
}
