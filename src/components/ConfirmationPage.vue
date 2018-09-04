/* eslint-disable */
<template>
  <div id="fh5co-started" class="fh5co-bg" style="">
  	<div class="overlay"></div>
  	<div class="container">
  		<div class="row animate-box fadeInUp animated-fast">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
  				<h2>Sua presença é essencial! Nos ajude a organizar melhor a festa e confirme que estará lá para celebrar conosco!</h2>
  				<p></p>
  			</div>
  		</div>
  		<div class="row animate-box fadeInUp animated-fast" id="confirmation-form">
  			<div class="col-md-12 col-md-offset-1">
  				<form class="form-inline">
  					<div class="row">
  						<div class="col-md-4 col-sm-4">
  							<div class="form-group has-error has-feedback">
  								<label for="name" class="sr-only">Nome completo</label>
                  <input v-model="name" class="form-control" placeholder="Nome completo">
  								<span id="error_name" class="glyphicon glyphicon-remove form-control-feedback hide" aria-hidden="true"></span>
  							</div>
  						</div>
  						<div class="col-md-4 col-sm-4">
  							<div class="form-group">
  								<label for="email" class="sr-only">Email</label>
                  <input v-model="email" class="form-control" placeholder="Email">
  							</div>
  						</div>
  						<div class="col-md-4 col-sm-4" id="guests_fields">
                <div class="form-group">
                  <label for="guests" class="sr-only">Vai trazer alguém?</label>
                  <input v-model.number="guests" type="number" class="form-control" placeholder="Quantos acompanhantes?">
                </div>
  						</div>
  					</div>
            <div class="row">
  						<div class="col-md-offset-4">
  							<button type="button" class="btn btn-primary btn-block" v-on:click="save">confirmar</button>
  						</div>
            </div>
  				</form>
  			</div>
  		</div>

  	</div>
  </div>

</template>

<script>
import { db } from '../main'

// @ is an alias to /src
export default {
  name: 'confirmationpage',
  data() {
    return {
      name: "",
      email: "",
      guests: ""
    }
  },
  methods: {
    save: function() {
      console.log('Nome: ' + this.name + ', email: ' + this.email + ', adicional: ' + this.guests);
      const createdAt = new Date()
      db.collection('rsvp').add({"nome" : this.name, adicional : this.guests, "email" : this.email, "createdAt" : createdAt})
    }
  }
}
</script>
