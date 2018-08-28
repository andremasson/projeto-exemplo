/* eslint-disable */
<template>
  <div>
    <h5>Inicio lista</h5>
    <br/>
    <ul>
      <li v-for="item in rsvp">
        {{ item.nome }} + {{ item.adicional }}
      </li>
    </ul>
    <br/>
    <h5>Fim lista</h5>
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from '../main'

export default {
  name: 'displaydata',
  data() {
    return {
      rsvp: []
    }
  },
  firestore () {
    return {
      rsvp: db.collection('rsvp').orderBy('nome')
    }
  }
}
</script>
