const CO = [
	document.getElementById("co-wh-button"),
	document.getElementById("co-pr-button"),
	document.getElementById("co-ln-button"),
];

CO[0].hidden = false;

for(let i = 0; i < 3; i++){
	CO[i].addEventListener("click", (event) => {
		event.currentTarget.parentNode.children[1].hidden = !event.currentTarget.parentNode.children[1].hidden;
	});
}

const PerfilIcon = document.getElementById("co").children[0];
PerfilIcon.addEventListener("click", () => {
	/*
	let variables = [
		"panel",
		"sub-panel",
	];
	
	let root = getComputedStyle(document.documentElement);
	let value = "";

	for(let i = 0; i < variables.length; i++){
		value = (root.getPropertyValue("--color-" + variables[i])).slice(1, 3);
		value = parseInt(value, 16) + 16;

		if(value - 16 > 255) continue;
		if(value > 255) value = 255;

		console.log("--color-" + variables[i]);
		root.setProperty("--color-" + variables[i], "#" + value.toString(16));
	}
	*/
});
