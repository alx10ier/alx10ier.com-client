<template lang="pug">
  .pi-text.pi-paragraph(@input="sayHi") {{ content }}
</template>

<script>
export default {
  props: ["nodeStyle", "content", "changeContent", "index"],
  computed: {

  },
  methods: {
    sayHi() {
      console.log('hi')
    }
  }
}
</script>
