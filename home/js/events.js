// open/close news content
(function(){
	let titl = null;
	let para = null;

	for(let i = 0; i < news.children.length; i++){
		titl = news.children[i].children[0]; // h4
		
		function openContent(){
			para = this.parentElement.children[1]; // p
			if(para.hidden){
				para.hidden = false;
				return;
			}
			para.hidden = true;
		}

		titl.addEventListener("click", openContent, i + 1);
	}
})();
