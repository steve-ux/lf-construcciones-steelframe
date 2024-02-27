import Header from "../components/Header";
import Info from "../components/Info";
import Gallery from "../components/Galeria";
import Contacto from "../components/Contacto";

function Home() {
    return (
    <div className="home">
    <Header/>
    <Info/>
    <Gallery/>
    <Contacto/>
    </div>
    );
  }
  
  export default Home;