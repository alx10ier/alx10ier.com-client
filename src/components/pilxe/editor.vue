<template lang="pug">
.pi-editor
  inline-toolbar
  .edit-area(contenteditable="true")
    component(
      v-for="(node, i) in $store.state.content"
      :is="'pi-' + node.type"
      :nodeStyle="node.style"
      :content="node.content"
      :changeContent="changeContent"
      :index="i")
</template>

<script>
 import PiMedia from './media-paragraph.vue'
 import PiText from './text-paragraph.vue'
 import InlineToolbar from './inline-toolbar.vue'
export default {
  data() {
    return {

    }
  },
  beforeMount() {
    
  },
  components: {
    PiMedia,
    PiText,
    InlineToolbar
  },
  methods: {
    changeContent() {
      console.log("triggered")
    },
    sayHi() {
      console.log('hi')
    }
  }
}
</script>
