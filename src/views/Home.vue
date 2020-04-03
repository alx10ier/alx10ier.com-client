<template>
  <div class="home">
    <div>{{ res }}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      res: ""
    }
  },
  mounted () {
    axios
      .get('http://167.71.218.100/test')
      .then(response => this.res = response.data)
  }
}
</script>
