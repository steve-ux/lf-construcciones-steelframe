import LF from "../assets/logo lf steel frame sin fondo 1.png";

  function Navbar() {
    return (
    <div className="burgerNav">
      <h1 class="logo"><img src={LF} alt="Logo de LF Construcciones" width="100"/></h1>
  <input id="toggle" type="checkbox"/>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
    <a href="/">INICIO</a><br/>
      <a href="#Nosotros">NOSOTROS</a><br/>
      <a href="#Trabajos">TRABAJOS</a><br/>
      <a href="#Contacto">CONTACTO</a><br/>
    </nav>
  </div>
</div>
    </div>
    );
  }
  
  export default Navbar;