<template>
  <div id="fh5co-couple-story">
  	<div class="overlay"></div>
  	<div class="container">
  		<div class="row">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
  				<h2>A História de Nós Dois</h2>
  				<p>
  					Nossa história começa como muitas histórias de amor. Mas como toda história de amor, construímos um percurso que é só nosso!
  				</p>
  			</div>
  		</div>
  		<div class="row">
  			<div class="col-md-12 col-md-offset-0">
  				<ul class="timeline animate-box fadeInUp animated-fast">
  					<li class="animate-box fadeInUp animated-fast">
  						<div class="timeline-badge" :style="{ backgroundImage: `url('${danca}')` }"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Dança… onde nos conhecemos e tudo começou.</h3>
  								<span class="date">01 de janeiro, 200?</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>
  					<li class="timeline-inverted animate-box fadeInUp animated-fast">
  						<div class="timeline-badge" style="background-image:url(images/chave_01.png);"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Em 2010 começamos a namorar</h3>
  								<span class="date">19 de fevereiro, 2010</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>
  					<li class="animate-box animate-box fadeInUp animated-fast">
  						<div class="timeline-badge" style="background-image:url(images/culinaria_01.jpg);"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Em 2011 criamos o HopAholics (uma de nossas maiores loucuras)</h3>
  								<span class="date">31 de agosto, 2011</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>
  					<li class="timeline-inverted fadeInUp animated-fast">
  						<div class="timeline-badge" style="background-image:url(images/danca_01.jpg); background-position: left"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Juntamos nossas “malas” e fomos criar nosso primeiro lar na Pompeia</h3>
  								<span class="date">8 de fevereiro, 2015</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>

  					<li class="animate-box fadeInUp animated-fast">
  						<div class="timeline-badge" style="background-image:url(images/corrida_02.jpg);"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Nosso  apartamento próprio! Nosso lar!</h3>
  								<span class="date">01 de janeiro, 2017</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>

  					<li class="timeline-inverted fadeInUp animated-fast">
  						<div class="timeline-badge" style="background-image:url(images/aliancas_02.jpg);"></div>
  						<div class="timeline-panel">
  							<div class="timeline-heading">
  								<h3 class="timeline-title">Ficamos noivos! E logo em breve, dia 9 de dezembro, estaremos casados!</h3>
  								<span class="date">2018</span>
  							</div>
  							<div class="timeline-body">
  								<p>

  								</p>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'historypage',
  data() {
    return {
      danca: require('@/assets/images/danca.jpg')
    }
  }
}
</script>
