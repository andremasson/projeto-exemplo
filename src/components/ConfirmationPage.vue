/* eslint-disable */
<template>
  <div id="fh5co-started" class="fh5co-bg">
  	<div class="overlay"></div>
  	<div class="container">
  		<div class="row animate-box fadeInUp animated-fast">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
  				<h2>Faça a confirmação aqui</h2>
  				<p></p>
  			</div>
  		</div>
      <div id="confirmed" v-if="confirmationok">
        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <p>Obrigado por confirmar!</p>
        </div>
      </div>
  		<div class="row animate-box fadeInUp animated-fast" id="confirmation-form" v-else>
  			<div class="col-md-12 col-md-offset-1" id="confirmation-form" >
  				<form class="form-inline">
  					<div class="row">
  						<div class="col-md-12 col-sm-12">
  							<div class="form-group has-error has-feedback">
  								<label for="name" class="sr-only">Nome completo</label>
                  <input v-model="name" class="form-control" placeholder="Nome completo">
  								<span id="error_name" class="glyphicon glyphicon-remove form-control-feedback hide" aria-hidden="true"></span>
  							</div>
  						</div>
  						<div class="col-md-12 col-sm-12">
  							<div class="form-group">
  								<label for="email" class="sr-only">Email</label>
                  <input v-model="email" class="form-control" placeholder="Email">
  							</div>
  						</div>
  					</div>
            <div class="row">
  						<div class="col">
                <button type="button" class="btn btn-primary btn-block" v-on:click="openModal">confirmar</button>
  						</div>
            </div>
  				</form>
  			</div>

  		</div>
  	</div>

    <b-modal ref="modalsm" size="lg" @ok="save" ok-only title="Vem acompanhado(a)?">

        <b-form-select v-model="guests" class="btn btn-primary dropdown">
          <option value="-1" selected="selected" disabled hidden>Quantas pessoas?</option>
          <option class="dropdown-item" value="0">Apenas eu</option>
          <option class="dropdown-item" value="1">1</option>
          <option class="dropdown-item" value="2">2</option>
          <option class="dropdown-item" value="3">3</option>
          <option class="dropdown-item" value="4">4</option>
          <option class="dropdown-item" value="5">5</option>
          <option class="dropdown-item" value="6">6</option>
          <option class="dropdown-item" value="7">7</option>
          <option class="dropdown-item" value="8">8</option>
          <option class="dropdown-item" value="9">9</option>
          <option class="dropdown-item" value="10">10</option>
        </b-form-select>
        <div v-for="(field, index) in guestsFields">
          <div class="form-group">
            <label for="name" class="sr-only">Nome completo</label>
            <input v-model="guestsNames[index]" class=" guest-input" placeholder="Nome completo">
          </div>
        </div>
    </b-modal>
    <b-modal ref="modalerror" size="sm" ok-only title="Ops...">
      Por favor complete todas as informações.
    </b-modal>
    <b-modal ref="confirmation" size="sm" ok-only title="Obrigado!">
      Esperamos por você!
    </b-modal>
  </div>

</template>

<script>
import { db } from '../main'

// @ is an alias to /src
export default {
  name: 'confirmationpage',
  data() {
    return {
      confirmationok: false,
      name: "",
      email: "",
      guests: "-1",
      guestsNames: []
    }
  },
  computed: {
    guestsFields: function() {
      this.guestsNames.length = (this.guests >= 0)?this.guests:0
      return this.guestsNames
    }
  },
  methods: {
    openModal: function() {
      if (this.name && this.email){
        this.$refs.modalsm.show()
      }
      else{
        this.$refs.modalerror.show()
      }
    },
    save: function() {
      const createdAt = new Date()
      if (!this.guests || this.guests < 0) this.guests = 0;
      db.collection('dados').add({"nome" : this.name, adicional : this.guests, "guests_names" : this.guestsNames, "email" : this.email, "createdAt" : createdAt})
      this.$refs.confirmation.show()
      this.confirmationok = true
    }
  }
}
</script>

<style scoped lang="css">
.dropdown {
  color: #fff;
}

.guest-input {
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #495057;
  background: rgba(255, 255, 255, 0.2);
  height: 54px;
  font-size: 18px;
  font-weight: 300;
  width: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 0.25rem;
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: #fff;
    border: 0;
}
</style>
