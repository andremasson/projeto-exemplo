<template>
  <div id="fh5co-header" class="fh5co-cover" role="banner" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <div class="display-t">
            <div class="display-tc animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
              <h1>{{ names }}</h1>

              <div class="simply-countdown simply-countdown-one" id="simply-countdown"></div>
              <p>
                <b-button class="btn btn-default btn-sm">
                  <a href="#" v-scroll-to="'#fh5co-event'">{{ save_the_date_message }}</a>
                </b-button>
              </p>
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
  name: 'pagehead',
  data() {
    return {
      names: 'Projeto Exemplo',
      save_the_date_message: 'Save the date',
    }
  },
  mounted: function () {
    var d = new Date('2018-12-09 11:00');

    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        words: {
          days: 'dia',
          hours: 'hora',
          minutes: 'minuto',
          seconds: 'segundo'
        },
        enableUtc: false
    });
  }
}
</script>
