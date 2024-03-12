import Cetrogar from "../assets/1.png";
import Libertad from "../assets/2.png";
import Claro from "../assets/3.png";
import YPF from "../assets/4.png";
import Country from "../assets/7.png";

function Gallery() {
  return (
    <>
    <div className="gallery">
    <div className="gallery-hijo">
    <h2 className="titleGallery">Marcas que prefirieron <span className="resaltado">LF Construcciones</span></h2>
    </div>
    <div className="gallery-hijo2">

    <figure>
        <img src={Cetrogar} alt="Mountains" width="230" />
        <figcaption>CETROGAR</figcaption>
      </figure>
      <figure>
        <img src={Libertad} alt="Mountains" width="230" />
        <figcaption>HIPER<br></br>Libertad</figcaption>
      </figure>
      <figure>
        <img src={Claro} alt="Mountains" width="230" />
        <figcaption>SUCURSALES<br></br>CLARO</figcaption>
      </figure>
      <figure>
        <img src={YPF} alt="Mountains" width="230" />
        <figcaption>YPF<br></br>RICARDO ROJAS</figcaption>
      </figure>
      <figure>
        <img src={Country} alt="Mountains" width="230" />
        <figcaption>CAÑUELAS<br></br>GOLF COUNTRY</figcaption>
      </figure>

    </div>
      
    </div>
    </>
  );
}

export default Gallery;