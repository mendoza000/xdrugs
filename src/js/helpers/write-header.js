const header = document.querySelector('#app');

export const writeHeader = () => {

	header.innerHTML = `
	<button class="menu_btn"><i class="menu_btn_icon las la-stream"></i></button>
      <header class="header">
        <nav class="header_nav">
          <span class="header_nav_title">IDrugs</span>
          <ul class="nav_list">
            <div class="barra barratop"></div>
            <li class="nav_list_item"><a href="#">Inicio</a></li>
            <li class="nav_list_item"><a href="#">Categorias</a></li>
            <li class="nav_list_item"><a href="#">Contacto</a></li>
            <div class="barra barrabottom"></div>
          </ul>
        </nav>

        <img class="header_img" src="./src/assets/wizard.png" alt="logo">

        <h1 class="header_title"><img src="./src/assets/barita.png" alt="">IDrugs</h1>
      </header>




	`


}