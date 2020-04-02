<template lang="pug">
#app
  app-header
  router-view
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  components: {
    "app-header": Header
  }
}
</script>

<style lang="scss">
@import 'assets/stylesheets/style.css';
</style>
