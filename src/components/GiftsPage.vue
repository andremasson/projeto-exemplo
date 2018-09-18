<template>
  <div id="fh5co-cotas">
    <div class="overlay"></div>
      <div class="container-fluid p-0 showcase">
        <div class="row" id="title-row">
    			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
    				<h2>Caso queira nos presentear, você pode ajudar a incrementar nossa lua-de-mel.</h2>
    				<p>
    					Dia 10 de dezembro embarcaremos para Whistler, no Canadá. Vamos curtir essa linda vila que sediou parte dos jogos olímpicos de inverno! Esperamos muito que dessa vez o plano de ver a neve cair não falhe! Depois, passaremos alguns dias em Vancouver antes de retornar para o nosso lar.
    				</p>
    			</div>
    		</div>
        <div v-for="(item, index) in list">
          <div class="row no-gutters">
            <div class="col-lg-6 text-white showcase-img" v-bind:class="[(index % 2 === 0)?'order-lg-2':'']" :style="{ backgroundImage: `url('${item.image}')` }"></div>
            <div class="col-lg-6 my-auto showcase-text" v-bind:class="[(index % 2 === 0)?'order-lg-1':'']">
              <h2>{{item.title}}<br/>{{item.value}}</h2>
              <button class="btn" v-on:click="openModal(index)" >Colaborar com {{item.contribute}}</button>
            </div>
          </div>
        </div>
      </div>

      <b-modal ref="modalgift" size="lg" ok-only title="Eba!" @ok="save">
        <h3>{{list[selectedIndex].title}}</h3>
        <p>Para contribuir para este presente, pedimos que deposite na nossa conta.</p>
        <b-row class="dados-conta">
          <b-col>
            <p>Banco do Brasil</p>
            <p>Agência: 4093-3</p>
            <p>Conta corrente: 71932-3</p>
            <p>CNPJ: 18.763.130/0001-41</p>
            <p>Roger Ferreira Batista</p>
          </b-col>
          <b-col id="coluna-meio" style="text-align: center; horizontal-align: middle; margin: auto auto auto">
            <p>Ou</p>
          </b-col>
          <b-col>
            <p>Itaú</p>
            <p>Agência: 0185</p>
            <p>Conta corrente: 09731-8</p>
            <p>CPF: 343.250.488-80</p>
            <p>Susana Miki Nagae</p>
          </b-col>
        </b-row>
        <br/>
        <p>Nos fale também quem é você para que possamos agradecer!</p>
        <div class="form-group has-feedback">
          <label for="name" class="sr-only">Nome completo</label>
          <input v-model="name" class="form-control" placeholder="Nome completo">
        </div>
        <div class="form-group">
          <label for="email" class="sr-only">Email</label>
          <input v-model="email" class="form-control" placeholder="Email">
        </div>
      </b-modal>

      <b-modal ref="confirmation" size="sm" ok-only title="Obrigado!">
        <p>Com certeza aproveitaremos muito seu presente! Esperamos você na festa!</p>
      </b-modal>

      <b-modal ref="error" size="sm" ok-only title="Ops...">
        Precisamos do seu nome e seu email.
      </b-modal>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'giftlistpage',
  props: {
    msg: String
  },
  methods: {
    openModal: function(idx) {
      this.selectedIndex = idx
      this.tituloPresente = this.list[idx].title
      this.valorPresente = this.list[idx].contribute
      this.$refs.modalgift.show()
    },
    save: function() {
      if (!this.name || !this.email) {
        this.$refs.error.show()
        this.$refs.modalgift.show()
      }
      else
      {
        const createdAt = new Date()
        db.collection('presentes').add({"nome" : this.name, "email" : this.email, "titulo" : this.tituloPresente, "valor" : this.valorPresente, "createdAt" : createdAt})
        this.$refs.confirmation.show()
      }
    }
  },
  data() {
    return {
        selectedIndex: 0,
        name: "",
        email: "",
        tituloPresente: "",
        valorPresente: "",
        list: [
          {
            title: "Drinks em Whistler",
            value: "(CAD 27,00 / R$ 80,00)",
            contribute: "R$40",
            image: require('@/assets/images/01.jpg')
          },
          {
            title: "VanDusen Festival of Lights",
            value: "(CAD 38,00 ou R$ 114,00)",
            contribute: "R$57",
            image: require('@/assets/images/02.jpg')
          },
          {
            title: "Ice Skating in Whistler",
            value: "(CAD 50,00 ou R$ 150,00)",
            contribute: "R$75",
            image: require('@/assets/images/03.jpg')
          },
          {
            title: "Jantar no Shabusen Yakiniku",
            value: "(CAD 70,00 ou R$ 210,00)",
            contribute: "R$105",
            image: require('@/assets/images/04.jpg')
          },
          {
            title: "Brunch  no Purebread",
            value: "(CAD 80,00 / R$ 240,00)",
            contribute: "R$120",
            image: require('@/assets/images/05.jpg')
          },
          {
            title: "Capilano Suspension Bridge park",
            value: "(CAD 94,00 ou R$ 282,00)",
            contribute: "R$141",
            image: require('@/assets/images/06.jpg')
          },
          {
            title: "Peak 2 Peak Gondola",
            value: "(CAD 110,00 / R$ 330,00)",
            contribute: "R$165",
            image: require('@/assets/images/07.jpg')
          },
          {
            title: "Jantar romântico",
            value: "(CAD 150,00 / R$ 450,00)",
            contribute: "R$225",
            image: require('@/assets/images/08.jpg')
          },
          {
            title: "Scandinave Spa Whistler",
            value: "(CAD 158,00 ou R$ 474,00)",
            contribute: "R$237",
            image: require('@/assets/images/09.jpg')
          },
          {
            title: "Esquiar",
            value: "(CAD 160,00 / R$ 480,00)",
            contribute: "R$240",
            image: require('@/assets/images/10.jpg')
          },
          {
            title: "Diária do Blackcomb Lodge",
            value: "(CAD 167,00 / R$ 500,00)",
            contribute: "R$250",
            image: require('@/assets/images/11.jpg')
          },
          {
            title: "Super Fly - Zipline & treetop adventures",
            value: "(CAD 180,00 / R$ 540,00)",
            contribute: "R$270",
            image: require('@/assets/images/12.jpg')
          },
          {
            title: "Passagens aéreas",
            value: "(R$ 4145,00)",
            contribute: "R$2072",
            image: require('@/assets/images/13.jpg')
          }
        ],
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
.dados-conta p {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}

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
  width: -moz-available;
  width: -webkit-fill-available;
  width: 100%;
}

@media (max-width: 767px) {
  #coluna-meio p {
    margin: 2em 5em 1em 5em;
  }
}

@media (min-width: 768px) {
  .showcase .showcase-text {
    padding: 7rem;
  }
}
</style>
