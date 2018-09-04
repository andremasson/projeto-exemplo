<template>
  <div id="page">
  	<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>
    <div id="fh5co-offcanvas">
  		<div style="text-transform: uppercase;">

  			<ul>
          <li class="js-fh5co-nav-toggle">
            <a href="#" v-scrool-to"'#fh5co-header'">inicio</a>
          </li>
          <li class="js-fh5co-nav-toggle">
            <a href="#" v-scrool-to"'#fh5co-couple'">sobre nós</a>
          </li>
          <li class="js-fh5co-nav-toggle">
            <a href="#" v-scrool-to"'#fh5co-event'">cerimônia</a>
          </li>
          <li class="js-fh5co-nav-toggle">
            <a href="#" v-scrool-to"'#fh5co-couple-story'">história</a>
          </li>
          <li class="js-fh5co-nav-toggle">
            <a href="#" v-scrool-to"'#fh5co-started'">rsvp</a>
          </li>
  			</ul>

  		</div>
  	</div>
  	<nav class="fh5co-nav" role="navigation" toggleable>
  		<div class="container">
  			<div class="row">
  				<div class="col-xs-2">

  				</div>
  				<div class="col-xs-10 text-right menu-1">
  					<ul>
              <li>
                <a href="#" v-scroll-to="'#fh5co-header'">inicio</a>
              </li>
              <li>
                <a href="#" v-scroll-to="'#fh5co-couple'">sobre nós</a>
              </li>
              <li>
                <a href="#" v-scroll-to="'#fh5co-event'">cerimônia</a>
              </li>
              <li>
                <a href="#" v-scroll-to="'#fh5co-couple-story'">história</a>
              </li>
              <li>
                <a href="#" v-scroll-to="'#fh5co-started'">rsvp</a>
              </li>
  					</ul>
  				</div>
  			</div>
  		</div>
  	</nav>

    <pagehead></pagehead>
    <couplepage></couplepage>
    <eventpage></eventpage>
    <historypage></historypage>
    <confirmationpage></confirmationpage>
    <displaydata></displaydata>
    <div class="home">
    </div>

  <footer id="fh5co-footer" role="contentinfo">
  		<div class="container">

  			<div class="row copyright">
  				<div class="col-md-12 text-center">
  					<p>
              <small class="block">Por André Masson.</small>
  						<small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a></small>
              <small class="block">© 2016 Free HTML5. All Rights Reserved.</small>
  					</p>
  				</div>
  			</div>

  		</div>
  	</footer>

    <back-to-top text="Back to top">
      <div class="gototop">
        <a href="#" v-on:click="displayGotoTop">
          <i class="icon-arrow-up"></i>
        </a>
      </div>
    </back-to-top>
    <!--
    <div class="gototop js-top">
      <a href="#" v-scroll-to="'#fh5co-header'">
      </a>
  	</div>
    -->
  </div>

</template>

<script>

import pagehead from '@/components/PageHead.vue'
import couplepage from '@/components/CouplePage.vue'
import eventpage from '@/components/EventPage.vue'
import historypage from '@/components/HistoryPage.vue'
import confirmationpage from '@/components/ConfirmationPage.vue'
import displaydata from '@/components/DisplayData.vue'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'home',
  components: {
    pagehead,
    couplepage,
    eventpage,
    historypage,
    confirmationpage,
    displaydata
  },
  methods: {
    displayGotoTop: function() {
      console.log("VOLTAR...")
    }
  },
  mounted: function() {
    console.log("Montada.")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
