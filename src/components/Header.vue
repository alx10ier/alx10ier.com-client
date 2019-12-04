<template lang="pug">
.header
  .navbar
    .navbar-menu
      router-link.navbar-item(to='/') Home
      router-link.navbar-item(to='/about') About
</template>

<script>
export default {

}
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
