import House from "../assets/steelframe.jpeg";

function Info() {
    return (
    
   <div className="info">
  <div className="description">
    <div>
    <p>En <span>LF Construcciones</span> nos dedicamos hace más de 10 años al <span>Steel Frame</span>, un sistema constructivo moderno que se basa en estructuras de acero galvanizado, en conjunto con la utilización de materiales de división, aislación, fijación y terminación.<br></br>
    <br/>Además de estas ventajas, el steel frame, es de construcción rápida, durable y mucho más económico que sistemas tradicionales. <br></br>Solicitá <span>presupuesto sin cargo</span>, te aseguramos buen precio y calidad.</p>
    <p>LF Construcciones, concretamos ideas.</p>
    <div class="box"><a href="#Contacto">Contratar</a></div>
    </div>
    <div>
    <img class="fox" src={House} alt="Casa en steel frame" width="600"/>
    </div>
  </div>
    </div>
    );
  }
  
  export default Info;