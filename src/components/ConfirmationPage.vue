/* eslint-disable */
<template>
  <div id="fh5co-started" class="fh5co-bg" style="">
  	<div class="overlay"></div>
  	<div class="container">
  		<div class="row animate-box fadeInUp animated-fast">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
  				<h2>Diz que sim... por favorzinho?</h2>
  				<p>Agora imagina a Sarinha pedindo e ajuda a gente a não deixar faltar bebida!!!</p>
  			</div>
  		</div>
  		<div class="row animate-box fadeInUp animated-fast hide" id="confirmation-message">
  			<div class="col-md-10 col-md-offset-1">
  				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
  					<p>Contamos com sua presença no casamento!</p>
  				</div>
  			</div>
  		</div>
  		<div class="row animate-box fadeInUp animated-fast hide" id="confirmation-wait">
  			<div class="col-md-10 col-md-offset-1">
  				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
  					<p>Aguarde, enviando a confirmação...</p>
  				</div>
  			</div>
  		</div>
  		<div class="row animate-box fadeInUp animated-fast" id="confirmation-form">
  			<div class="col-md-10 col-md-offset-1">
  				<form class="form-inline">
  					<div class="row">
  						<div class="col-md-4 col-sm-4">
  							<div class="form-group has-error has-feedback">
  								<label for="name" class="sr-only">Nome</label>
                  <input v-model="name" class="form-control" placeholder="Nome">
  								<span id="error_name" class="glyphicon glyphicon-remove form-control-feedback hide" aria-hidden="true"></span>
  							</div>
  						</div>
  						<div class="col-md-4 col-sm-4">
  							<div class="form-group">
  								<label for="email" class="sr-only">Email</label>
                  <input v-model="email" class="form-control" placeholder="Email">
  							</div>
  						</div>
  						<div id="guests_fields">

  						</div>
  						<div class="col-md-4 col-sm-4">
  							<div class="form-group">
  								<button type="button" class="btn btn-default" v-on:click="adicionar">adicionar convidado</button>
  							</div>
  						</div>
  					</div>
  					<div class="row">
  						<div class="col-md-offset-5 col-sm-4">
  							<button type="button" class="btn btn-primary btn-block" v-on:click="salvar">confirmar</button>
  						</div>
  					</div>
  				</form>
  			</div>
  		</div>

  		<div class="row animate-box fadeInUp animated-fast" style="padding-top: 30px;" id="confirmation-wait">
  			<div class="row">
  				<div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
  					<h2>Listas de Presente</h2>
  					<p>
  						Não precisa de presente... de verdade. A gente fica feliz mesmo é com a sua presença! Mas se você fizer questão de nos presentear, fizemos listinhas...
  					</p>
  				</div>
  			</div>
  			<div class="row">
  				<div class="col-md-6 text-center">
  					<a href="http://www.camicado.com.br/weddinglist/products/60351316" target="_blank"><img style="width: 172px; height: 55px; border-width: 0; background: url(../images/sprite.png)  -1485px -950px;">Camicado</a>
  				</div>
  				<div class="col-md-6 text-center">
  					<a href="http://nossosite.fastshop.com.br/charleneeandre/productList" target="_blank">Fast</a>
  				</div>
  			</div>
  		</div>

  	</div>
  </div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'confirmationpage',
  data() {
    return {
      name: "",
      email: ""
    }
  },
  methods: {
    adicionar: function() {
      console.log('Email: ' + this.email);
    },
    salvar: function() {
      console.log('Nome: ' + this.name);
    }
  }
}
</script>
