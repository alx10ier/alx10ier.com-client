<template lang="pug">
header
  .navbar
    .navbar-brand
      .navbar-item
        img(src='../assets/images/raven-img.png' height='40px' width='40px')
    .navbar-menu.left
      router-link.navbar-item(to='/') Home
      router-link.navbar-item(to='/about') About
    .navbar-menu.right
      a.navbar-item Signin
      a.navbar-item Signup
</template>

<script>
export default {

}
</script>

<style lang="scss">
// a {
//   font-weight: bold;
//   color: #2c3e50;
//
//   &.router-link-exact-active {
//     color: #42b983;
//   }
// }
</style>
