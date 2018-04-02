<template>
  <div id="app">
  <span>CIDR Overlap Finder</span>
    <form @submit.prevent="onSubmit">
      <label>
        <input type="text" v-model="cidrs" width="50"/>
      </label><br>
      <button type="submit">Submit</button>
    </form>
    Results: {{ results }}
  </div>
</template>

<script>
  const { findOverlaps } = require('./utils')

  export default {
    name: 'subnet-overlap',
    data () {
      return {
        results: '',
        cidrs: ''
      }
    },
    methods: {
      onSubmit() {
        this.results = findOverlaps(this.cidrs)
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
