// https://www.instagram.com/luisvalderrama09/
import LF from "../assets/logo lf steel frame sin fondo 2.png";
import Arrow from "../assets/arrow.png";

function Footer() {
    return (
    <div className="footer-padre">

      <div className="footer-hijo">
      <div className="footer-menu">
      <h4>MENÚ</h4>
      <p><a href="#Trabajos">TRABAJOS</a></p>
      <p><a href="#Nosotros">NOSOTROS</a></p>
      <p><a href="#Contacto">CONTACTO</a></p>
      </div>
      <div className="footer-menu">
      <h4>+ INFORMACIÓN</h4>
      <p><a>JOSÉ LUIS VALDERRAMA</a></p>
      <p><a href="tel:3513028154" target="_blank" rel="noopener noreferrer">TELÉFONO: 3513028154</a></p>
      <p><a>HORARIO: DE 8 A 18 HS</a></p>
      </div>
      <div className="footer-menu3">
      <h4>UBICACIÓN</h4>
      <p><a>ALBERDI, CÓRDOBA. ARGENTINA.</a></p>
      <p><a href="tel:3513028154" target="_blank" rel="noopener noreferrer">CONSULTAR MÁS UBICACIONES.</a></p>
      <p><a href="mailto:luisfabianovalderrama09@gmail.com" target="_blank" rel="noopener noreferrer">LUISFABIANOVALDERRAMA09@GMAIL.COM</a></p>
      </div> 
      </div>


      <div className="footer-hijo">
      <img src={LF} alt="Logo de LF Construcciones" width="80"/>
      <div>
      <p className="text-footer">LF CONSTRUCCIONES Copyright ©{" "}
          {new Date().getFullYear()} Todos los derechos reservados.</p>
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