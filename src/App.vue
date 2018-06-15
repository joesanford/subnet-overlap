<template>
  <div id="app">
  <span>CIDR Overlap Finder</span>
    <form @submit.prevent="onSubmit">
      <label>
        <input type="text" v-model="cidrs" width="250"/>
      </label><br>
      <button type="submit">Submit</button>
    </form>
    <ul>
      <li v-for="result in overlaps">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
  const { findOverlaps } = require('./utils')

  export default {
    name: 'subnet-overlap',
    data () {
      return {
        overlaps: null
      }
    },
    methods: {
      onSubmit() {
        this.overlaps = findOverlaps(this.cidrs)
      }
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

a {
  color: #42b983;
}
</style>
