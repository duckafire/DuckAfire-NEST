function newProjectPanel(_img, _title, _descr, links){
	// containers
	let fullCtt = document.createElement("div");
	let textCtt = document.createElement("div");
	let linkCtt = document.createElement("div");

	fullCtt.className = PROJECT_BODY_BOX_CLASS;
	linkCtt.className = PROJECT_BODY_LINK_CLASS;

	// panel elements (except links)
	let img   = document.createElement("img");
	let title = document.createElement("h2");
	let descr = document.createElement("p");

	img.src = "./img/project-" + _img + ".png";

	// text content to sub-container
	title.textContent = _title;
	descr.textContent = '"' + _descr + '"';

	textCtt.appendChild(title);
	textCtt.appendChild(descr);

	// links content to sub-container
	let a, i, s;
	for(let j = 0; j < links.length; j++){
		a = document.createElement("a");
		i = document.createElement("i");
		s = document.createElement("span");

		a.href        = "https://" + links[j][0];
		i.className   = links[j][1];
		s.textContent = links[j][2];

		a.appendChild(i);
		a.appendChild(s);

		linkCtt.appendChild(a);
	}

	// add elements to mother container
	fullCtt.appendChild(img);
	fullCtt.appendChild(textCtt);
	fullCtt.appendChild(linkCtt);

	if(PROJECT_BODY.children.length < 3){
		PROJECT_BODY.appendChild(fullCtt);
		return;
	}

	fullCtt.style.display = "none";
	PROJECT_BODY_MORE.appendChild(fullCtt);
}

function createProjectsMoreButton(){
	let div0 = document.createElement("div");
	let div1 = document.createElement("div");
	let i    = document.createElement("i");

	div0.id = "projects-more-icon";
	div0.addEventListener("click", showMoreProjects);
	i.className = "fa-solid fa-caret-down";

	PROJECT_BODY_MORE.appendChild(div0);
	div0.appendChild(div1);
	div1.appendChild(i);
}
