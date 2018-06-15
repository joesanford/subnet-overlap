<template>
  CIDRs: {{ cidr.cidr1 }}, {{ cidr.cidr2 }}<br>
  Overlap: {{ cidr.intersectionStart }} - {{ cidr.intersectionEnd }}
</template>

<script>
  export default {
    name: 'overlap-card'
  }
</script>

<style scoped>

</style>
