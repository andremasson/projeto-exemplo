<template>
  <div id="fh5co-event" class="fh5co-bg" style="">
  	<div class="overlay"></div>
  	<div class="container">
  		<div class="row">
  			<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box fadeInUp animated-fast">
  				<h2>Cerimônia</h2>
  			</div>
  		</div>
  		<div class="row">
  			<div class="display-t">
  				<div class="display-tc">
  					<div class="col-md-10 col-md-offset-1">
  						<div class="col-md-12 col-sm-12 text-center">
  							<div class="event-wrap animate-box fadeInUp animated-fast">
  								<h3>Agenda</h3>
  								<div class="event-col">
  									<i class="icon-clock"></i>
  									<span>{{start_time}}</span>
  									<span>{{end_time}}</span>
  								</div>
  								<div class="event-col">
  									<i class="icon-calendar"></i>
  									<span>{{day}}</span>
  									<span>{{month}}</span>
  								</div>
  								<p>
  									{{address}}
  								</p>
  								<p>
  									<a class="btn btn-info" href="https://goo.gl/maps/3K38AAg3A6Q2" target="_blank"><i class="icon-map"></i> Veja o mapa</a>
  									<a class="btn btn-info" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=bzJlbTN0MDdxcDZwaGF1Y2hhYWhybHBvZjggbWFzc29uLmFuZHJlQG0&amp;tmsrc=masson.andre%40gmail.com"><i class="icon-calendar"></i> Salve na agenda</a>
  								</p>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'eventpage',
  data() {
    return {
      start_time: '11:00',
      end_time: '16:30',
      day: 'Sábado, 09',
      month: 'Setembro, 2017',
      open_calendar_message: 'agenda',
      address: 'Jardim Aurélia - Rua Tabapuã, 838 - Itaim Bibi'
    }
  }
}
</script>
