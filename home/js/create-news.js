const news = document.getElementById("news");

let cont = null;
let titl = null;
let para = null;
for(let i = 0; i < newsContent.length; i++){
	// 0 = titl | 1 = paragraph
	titl = document.createElement("h4");
	titl.textContent = newsContent[i][0];
	titl.style.background = "#1f1f1f";
	titl.style.borderRadius = "10px";
	titl.style.textAlign = "center"

	para = document.createElement("p");
	para.textContent = newsContent[i][1];
	para.style.position = "relative";
	para.style.padding = "0px 1rem 0px 1rem";
	para.style.top = "-20px";
	para.setAttribute("hidden", true);

	cont = document.createElement("div");
	// cont.style.background = "#1f1f1f";
	// cont.style.borderRadius = "10px";
	cont.appendChild(titl);
	cont.appendChild(para);

	news.appendChild(cont);
}

news.removeAttribute("hidden");
