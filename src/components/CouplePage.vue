<template>
  <div id="fh5co-couple">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
					<h2>Sobre Nós</h2>

				</div>
			</div>
			<div class="couple-wrap animate-box fadeInUp animated-fast">
				<div class="couple-half">
					<div class="bride">
						<img :src="bride" alt="bride" class="img-responsive">
					</div>
					<div class="desc-bride">
						<h3>Susana Nagae</h3>
						<p>
              “When I look at you, I can feel it. I look at you and I’m home.”
              <br/><br/>
              Compartilhar a vida com ele é mais que fazer muitas viagens, experimentar muitas coisas, é encontrar em seus abraços, em sua companhia... meu lar!
              Temos um plano bem simples… ficar juntos pro resto da vida!
            </p>
					</div>
				</div>
				<p class="heart text-center"><i class="icon-heart2"></i></p>
				<div class="couple-half">
					<div class="groom">
						<img :src="groom" alt="groom" class="img-responsive">
					</div>
					<div class="desc-groom">
						<h3>Roger Batista</h3>
						<p>
              Recentemente decidi uma das coisas mais importantes da minha vida. Eu pedi a Su em casamento. E ela disse SIMMM!
              <br/><br/>
              É difícil ter tantas certezas nesse mundo doido. Decidir o que queremos fazer, com o que queremos trabalhar, como queremos viver, em que realmente acreditar e também se queremos viver com alguém pelo resto de nossas vidas.  De muitas decisões a serem tomadas, casar com a Su é a única que foi extremamente fácil e certa. Namoramos há 8 anos. Que venha o ∞ !
            </p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'couplepage',
  data() {
    return {
      bride: require('@/assets/images/bride.jpg'),
      groom: require('@/assets/images/groom.jpg')
    }
  }
}
</script>
