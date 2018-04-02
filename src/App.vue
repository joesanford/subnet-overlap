<template>
  <div id="app">
    <span>CIDR Overlap Finder</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="1.2.3.4/16, 5.6.7.8/32"></textarea>
  </div>
</template>

<script>
  const { findOverlaps } = require('./utils')

  export default {
    name: 'app',
    data () {
      return {
        message: ''
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
