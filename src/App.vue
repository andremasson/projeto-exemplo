<template>
  <div class="home">
    <pagehead></pagehead>
    <couplepage></couplepage>
    <eventpage></eventpage>
    <historypage></historypage>
    <!-- <confirmationpage></confirmationpage> -->
  </div>
</template>

<script>
import pagehead from '@/components/PageHead.vue'
import couplepage from '@/components/CouplePage.vue'
import eventpage from '@/components/EventPage.vue'
import historypage from '@/components/HistoryPage.vue'
// import confirmationpage from '@/components/ConfirmationPage.vue'

export default {
  name: 'home',
  components: {
    pagehead,
    couplepage,
    eventpage,
    historypage,
    // confirmationpage
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
