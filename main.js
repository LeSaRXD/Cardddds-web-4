let card_bgs = [];

let get_gradient = (mouse_x, mouse_y, div_x, div_y, gradient_color = "var(--card-gradient-color)", end_color = "transparent", radius = "120%") => {
	return `radial-gradient(circle at ${mouse_x - div_x}px ${mouse_y - div_y}px, ${gradient_color}, ${end_color} ${radius})`;
}

let get_apply_gradient = (element, gradient_color, end_color, radius) => ((e) => apply_gradient(e, element, gradient_color, end_color, radius));
let apply_gradient = (e, element, gradient_color, end_color, radius) => {
	let rect = element.getBoundingClientRect();
	element.style.background = get_gradient(e.clientX, e.clientY, rect.left, rect.top, gradient_color, end_color, radius);
}

window.onload = () => {

	document.body.addEventListener("mousemove", get_apply_gradient(document.body, "color-mix(in srgb, var(--background-color) 90%, var(--background-gradient-color) 10%)", "var(--background-color)", "80%"));
	
	card_bgs = document.querySelectorAll(".card-background");
	for(let card_bg of card_bgs) {
		card_bg.parentElement.addEventListener("mousemove", get_apply_gradient(card_bg));
	}

}