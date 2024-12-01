const PROJECT_BODY = document.getElementById("projects");
const PROJECT_BODY_BOX_CLASS  = "project-box";
const PROJECT_BODY_LINK_CLASS = "project-link";

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

	PROJECT_BODY.appendChild(fullCtt);
}
