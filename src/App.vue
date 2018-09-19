<template>
  <div id="page">

    <Slide id="collapse-nav" right>
      <a href="#" v-scroll-to="'#fh5co-header'">inicio</a>
      <a href="#" v-scroll-to="'#fh5co-started'">Confirmação</a>
    </Slide>

  	<nav id="full-nav" class="fh5co-nav" role="navigation" toggleable>
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
                <a href="#" v-scroll-to="'#fh5co-started'">Confirmação</a>
              </li>
  					</ul>
  				</div>
  			</div>
  		</div>
  	</nav>

      <pagehead></pagehead>
      <confirmationpage></confirmationpage>
      <displaydata></displaydata>


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
        <a href="#">
          <i class="icon-arrow-up"></i>
        </a>
      </div>
    </back-to-top>

  </div>

</template>

<script>

import pagehead from '@/components/PageHead.vue'
import confirmationpage from '@/components/ConfirmationPage.vue'
import displaydata from '@/components/DisplayData.vue'
import { Slide } from 'vue-burger-menu'
var VueScrollTo = require('vue-scrollto')

export default {
  name: 'home',
  components: {
    pagehead,
    confirmationpage,
    displaydata,
    Slide
  }
}
</script>

<style>

</style>
