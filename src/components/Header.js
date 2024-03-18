import Navbar from "../components/Navbar";
import Videoloop from "../assets/videoback.mov";
import "../styles/button.scss"

function Header() {
  return (
    <div className="headerPadre">
       <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
<Navbar/>
<div class="Iam">
<section class="section top-section">
    <div class="content-container content-theme-dark">
      <div class="content-inner">
        <div class="content-center">
          <h1>LF CONSTRUCCIONES</h1>
        <p>STEEL FRAME</p>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="container-button">
<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <a href="#Nosotros"><span class="button-text">Saber más</span></a>
  </button>
</div>
</div>



  <div className="header">
   {/* <div class="mouse">
    <span></span>
   </div> */}
  </div>
</div>
  );
}

export default Header;