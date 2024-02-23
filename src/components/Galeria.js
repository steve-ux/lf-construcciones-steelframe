import Cetrogar from "../assets/1.png";
import Libertad from "../assets/2.png";
import Claro from "../assets/3.png";
import YPF from "../assets/4.png";

function Gallery() {
  return (
    <>
    <h2 className="titleGallery">Clientes</h2>
    <div className="gallery">
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
    </div>
    </>
  );
}

export default Gallery;