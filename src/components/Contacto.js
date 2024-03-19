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
		<form class="card-form" action="https://formsubmit.co/luisfabianovalderrama09@gmail.com" method="post">
		<label for="from">
        </label>
			<div class="input">
				<input type="text" class="input-field" id="full_name" name="Nombre" required/>
				<label class="input-label">Nombre, marca o proyecto</label>
			</div>
      <div class="input">
				<input type="number" class="input-field" id="tel" name="Teléfono" pattern="[0-9]{10}" required/>
				<label class="input-label">Teléfono (Con código de área sin el 0 y el 15)</label>
			</div>
						<div class="input">
				<input type="email" class="input-field" id="email" name="Correo" required/>
				<label class="input-label">Email</label>
			</div>
						<div class="input">
				<input type="text" class="input-field" id="message" name="Consulta" required/>
				<label class="input-label">Mensaje</label>
			</div>
			<div class="action">
				<button class="action-button" type="submit" value="Enviar">ENVIAR</button>
			</div>
			<input type="hidden" name="_next" value="https://lf-construcciones.com.ar/Enviado"/>
            <input type="hidden" name="_subject" value="Nueva consulta desde la web LF Construcciones!"/>
            <input type="hidden" name="_captcha" value="false" />
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