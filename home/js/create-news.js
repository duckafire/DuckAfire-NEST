(function(){
	let cont = null;
	let titl = null;
	let para = null;

	for(let i = 0; i < NEWS_CHILD_LEN; i++){
		// 0 = titl | 1 = paragraph
		titl = document.createElement("h4");
		titl.style.background   = "#1f1f1f";
		titl.style.borderRadius = "10px";
		titl.style.padding      = "0.3rem 1rem 0.3rem 1rem";
		titl.style.textAlign    = "center"

		para = document.createElement("p");
		para.setAttribute("hidden", true);
		para.style.padding  = "0px 2.5% 0px 2.5%";
		para.style.position = "relative";
		para.style.top      = "-20px";

		cont = document.createElement("div");
		cont.appendChild(titl);
		cont.appendChild(para);

		news.appendChild(cont);
	}
})();
