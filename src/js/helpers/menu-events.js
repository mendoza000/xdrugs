
export const menuEvent = () =>{

	const btn = document.querySelector('.menu_btn');
	const menu = document.querySelector('.nav_list');
	let view = false

	btn.addEventListener('click', (event) => {
		
		if (!view) {
			menu.style.left = "0vw"
			view = !view
		} else{
			menu.style.left = "-100vw"
			view = !view
		}

	});



}
