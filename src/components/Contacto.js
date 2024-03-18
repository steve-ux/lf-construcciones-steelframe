import "../styles/form.scss"

function Contacto() {
    return (
    <div className="contactar">
  <div class="container">
	<div class="card">
		<div class="card-image">
			<h2 class="card-heading" id="Contacto"><br></br><br></br>
				Concretamos ideas.
				<small>Presupuesto sin cargo.</small>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
				<input type="text" class="input-field" required/>
				<label class="input-label">Nombre, marca o proyecto</label>
			</div>
      <div class="input">
				<input type="number" class="input-field" required/>
				<label class="input-label">Teléfono (Con código de área sin el 0 y el 15)</label>
			</div>
						<div class="input">
				<input type="email" class="input-field" required/>
				<label class="input-label">Email</label>
			</div>
						<div class="input">
				<input type="text" class="input-field" required/>
				<label class="input-label">Mensaje</label>
			</div>
			<div class="action">
				<button class="action-button">ENVIAR</button>
			</div>
		</form>
		<div class="card-info">
			<p>Al hacer click en enviar, acepta nuestros <a href="#">Términos y Condiciones.</a>Tu información está protegida.</p>
		</div>
	</div>
</div>
    </div>
    );
  }
  
  export default Contacto;