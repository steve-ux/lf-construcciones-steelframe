// https://www.instagram.com/luisvalderrama09/
import LF from "../assets/logo lf steel frame sin fondo 2.png";
import Arrow from "../assets/arrow.png";

function Footer() {
    return (
    <div className="footer-padre">

      <div className="footer-hijo">
      <img src={LF} alt="Logo de LF Construcciones" width="80"/>
      <div>
      <p className="text-footer">LF CONSTRUCCIONES Copyright ©{" "}
          {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="text-footer">Córdoba, capital. Argentina.</p>
      </div>
      <div>
      <a href="#"><img src={Arrow} alt="Logo de LF Construcciones" className="arrow" width="50"/></a>    
      <p>SUBIR</p>
      </div>
      </div>
      <hr></hr>
      <footer>
          Copyright ©{" "}
          {new Date().getFullYear()} <span>[ <a href="https://pixelpeak.ar/" target="_blank" rel="noopener noreferrer">PixelPeak</a> ]</span> Diseño y Programación | Mendoza - Argentina{" "}    
  </footer>
    </div>
    );
  }
  
  export default Footer;