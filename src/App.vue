<template>
  <div id="page">
  	<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>
    <div id="fh5co-offcanvas">
  		<div style="text-transform: uppercase;">
        <!--
  			<ul>
  				<li class="js-fh5co-nav-toggle">{{scroll-to label='inicio' href='#fh5co-header' afterScroll="ToggleNav"}}</li>
  				<li class="js-fh5co-nav-toggle">{{scroll-to label='sobre nós' href='#fh5co-couple' afterScroll="ToggleNav"}}</li>
  				<li class="js-fh5co-nav-toggle">{{scroll-to label='cerimônia' href='#fh5co-event' afterScroll="ToggleNav"}}</li>
  				<li class="js-fh5co-nav-toggle">{{scroll-to label='história' href='#fh5co-couple-story' afterScroll="ToggleNav"}}</li>
  				<li class="js-fh5co-nav-toggle">{{scroll-to label='rsvp' href='#fh5co-started' afterScroll="ToggleNav"}}</li>
  			</ul>
        -->
  		</div>
  	</div>
  	<nav class="fh5co-nav" role="navigation">
  		<div class="container">
  			<div class="row">
  				<div class="col-xs-2">

  				</div>
  				<div class="col-xs-10 text-right menu-1">
            <!--
  					<ul>
              <li>{{scroll-to label='inicio' href='#fh5co-header' afterScroll="ToggleNav"}}</li>
              <li>{{scroll-to label='sobre nós' href='#fh5co-couple' afterScroll="ToggleNav"}}</li>
              <li>{{scroll-to label='cerimônia' href='#fh5co-event' afterScroll="ToggleNav"}}</li>
              <li>{{scroll-to label='história' href='#fh5co-couple-story' afterScroll="ToggleNav"}}</li>
              <li>{{scroll-to label='rsvp' href='#fh5co-started' afterScroll="ToggleNav"}}</li>
  					</ul>
            -->
  				</div>
  			</div>
  		</div>
  	</nav>

    <div class="home">
      <pagehead></pagehead>
      <couplepage></couplepage>
      <eventpage></eventpage>
      <historypage></historypage>
       <confirmationpage></confirmationpage>
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

    <div class="gototop js-top">
      <!--
      {{#scroll-to href='#fh5co-header'}}
    		<i class="icon-arrow-up"></i>
      {{/scroll-to}}
      -->
  	</div>
  </div>

</template>

<script>

import pagehead from '@/components/PageHead.vue'
import couplepage from '@/components/CouplePage.vue'
import eventpage from '@/components/EventPage.vue'
import historypage from '@/components/HistoryPage.vue'
import confirmationpage from '@/components/ConfirmationPage.vue'

export default {
  name: 'home',
  components: {
    pagehead,
    couplepage,
    eventpage,
    historypage,
    confirmationpage
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
