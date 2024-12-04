function newProjectPanel(_img, _title, _descr, lang, links){
	// containers
	const fullCtt = document.createElement("div");
	const textCtt = document.createElement("div");
	const linkCtt = document.createElement("div");
	const langCtt = [document.createElement("div"), document.createElement("div")];

	// <a> <i> <span>
	let a, i, s;

	fullCtt.className = PROJECT_BODY_BOX_CLASS;
	linkCtt.className = PROJECT_BODY_LINK_CLASS;

	// panel elements (except links)
	const img   = document.createElement("img");
	const title = document.createElement("h2");
	const descr = document.createElement("p");

	// project icon/cover
	img.src = "./img/project-" + _img + "-icon.png";

	// languages used in project
	langCtt[0].id = PROJECT_BODY_LANG_CLASS;
	langCtt[1].title = "Linguagens usadas"

	for(let j = 0; j < lang.length; j++){
		i = document.createElement("i");

		i.className = "devicon-" + lang[j] + "-plain";

		langCtt[1].appendChild(i);
	}

	langCtt[0].appendChild(langCtt[1]);

	// text content to sub-container
	title.textContent = _title;
	descr.textContent = '"' + _descr + '"';

	textCtt.appendChild(title);
	textCtt.appendChild(descr);

	// links content to sub-container
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
	fullCtt.appendChild(langCtt[0]);
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
	const div0 = document.createElement("div");
	const div1 = document.createElement("div");
	const i    = document.createElement("i");

	div0.id = "projects-more-icon";
	div0.style.border = "3px solid black";
	div0.addEventListener("click", showMoreProjects);
	i.className = "fa-solid fa-caret-down";

	PROJECT_BODY_MORE.appendChild(div0);
	div0.appendChild(div1);
	div1.appendChild(i);
}
