import House from "../assets/steelframe.jpeg";
import House2 from "../assets/steelframe2.jpeg";
import House3 from "../assets/steelframe3.jpeg";

function Info() {
    return (
    
   <div className="info">


  <div className="description1" id="Nosotros" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
    <div>
    <p>En <span>LF Construcciones</span> nos dedicamos hace más de 10 años al <span>Steel Frame</span> en la ciudad de Córdoba, un sistema constructivo moderno que se basa en estructuras de acero galvanizado, materiales de división, aislación, fijación y terminación.</p>

    </div>
    <div>
    <img class="fox" src={House} alt="Casa en steel frame, esqueleto" width="900"/>
    </div>
  </div>


  <div className="description" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
    <div>
    <img class="fox" src={House2} alt="Casa en steel frame en construcción" width="900"/>
    </div>
    <div>
    <p>Una obra promedio de Steel Frame se construye en <span>45 días</span> trabajados. Esto permite congelar precios sin tener que sufrir el <span>impacto inflacionario</span>. Por otra parte, la exactitud en los cálculos estructurales reduce desperdicios y recortes. Lo que genera una obra <span>extremadamente limpia</span>.</p>

    </div>
  </div>



  <div className="description" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
    <div>
    <p><br></br>
    <br/>Además de estas ventajas, el steel frame, es sustentable, perdurable en el tiempo y mucho más flexible que sistemas tradicionales. <br></br>Solicitá un <span>presupuesto sin cargo</span>, te aseguramos buen precio y calidad.</p>
    <p>LF Construcciones, concretamos ideas.</p>
    </div>
    <div>
    <img class="fox" src={House3} alt="Casa en steel frame terminada" width="600"/>
    </div>
  </div>
    <div class="box"><a href="#Contacto">CONTRATAR</a></div>

    </div>
    );
  }
  
  export default Info;