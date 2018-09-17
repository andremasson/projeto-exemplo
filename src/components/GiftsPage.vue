<template>
  <div class="showcase">
    <div id="fh5co-cotas"></div>
    <div class="container-fluid p-0">
      <div class="row" id="title-row">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
  				<h2>Caso queira nos presentear, você pode ajudar a incrementar nossa lua-de-mel.</h2>
  				<p>
  					Dia 10 de dezembro embarcaremos para Whistler, no Canadá. Vamos curtir essa linda vila que sediou parte dos jogos olímpicos de inverno! Esperamos muito que dessa vez o plano de ver a neve cair não falhe! Depois, passaremos alguns dias em Vancouver antes de retornar para o nosso lar.
  				</p>
  			</div>
  		</div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase3}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Drinks em Whistler<br/>(CAD 27,00 / R$ 80,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$40</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>VanDusen Festival of Lights<br/>(CAD 38,00 ou R$ 114,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$57</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Ice Skating in Whistler<br/>(CAD 50,00 ou R$ 150,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$75</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Jantar no Shabusen Yakiniku<br/>(CAD 70,00 ou R$ 210,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$105</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Brunch  no Purebread<br/>(CAD 80,00 / R$ 240,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$120</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Capilano Suspension Bridge park<br/>(CAD 94,00 ou R$ 282,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$141</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Peak 2 Peak Gondola<br/>(CAD 110,00 / R$ 330,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$165</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Jantar romântico<br/>(CAD 150,00 / R$ 450,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$225</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Scandinave Spa Whistler<br/>(CAD 158,00 ou R$ 474,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$237</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Esquiar<br/>(CAD 160,00 / R$ 480,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$240</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Diária do Blackcomb Lodge<br/>(CAD 167,00 / R$ 500,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$250</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase2}')` }"></div>
        <div class="col-lg-6 my-auto showcase-text">
          <h2>Super Fly - Zipline & treetop adventures<br/>(CAD 180,00 / R$ 540,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$270</p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-lg-6 order-lg-2 text-white showcase-img" :style="{ backgroundImage: `url('${images.showcase1}')` }"></div>
        <div class="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Passagens aéreas<br/>(R$ 4145,00)</h2>
          <p class="lead mb-0">Clique aqui se quiser colaborar com R$2072</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'giftlistpage',
  props: {
    msg: String
  },
  data() {
        return {
            images: {
                showcase1: require('@/assets/images/danca.jpg'),
                showcase2: require('@/assets/images/inicio.jpg'),
                showcase3: require('@/assets/images/hopaholics.jpg')
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#title-row {
  padding-top: 5em;
}

.showcase .showcase-text {
  padding: 3rem;
}

.showcase .showcase-img {
  min-height: 30rem;
  background-size: cover;
}

.showcase .row {
  width: -webkit-fill-available;
}

@media (min-width: 768px) {
  .showcase .showcase-text {
    padding: 7rem;
  }
}
</style>
