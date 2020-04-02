<template lang="pug">
  .inline-toolbar
    button.inline-toolbar-item(@click="boldText") B
    button.inline-toolbar-item U
    button.inline-toolbar-item I
    button.inline-toolbar-item S
</template>

<script>
export default {
  methods: {
    boldText: function() {
      const range = window.getSelection().getRangeAt(0)
      console.log(range.startContainer)
      console.log(range.endContainer)
    }
  }
}
</script>
