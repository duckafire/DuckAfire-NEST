function showMoreProjects(){
	const end = PROJECT_BODY_MORE.children.length - 1;

	for(let i = 0; i < end; i++){
		if(PROJECT_BODY_MORE.children[i].style.display == "none")
			PROJECT_BODY_MORE.children[i].style.display = "";
		else
			PROJECT_BODY_MORE.children[i].style.display = "none";
	}

	// ... > DIV > div > i
	let i = PROJECT_BODY_MORE.children[end].children[0].children[0];
	let nclass

	if(i.className.includes("down"))
		nclass = i.className.replace("down", "up");
	else
		nclass = i.className.replace("up", "down");

	i.className = nclass;
}
