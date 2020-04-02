<template lang="pug">
  .pi-media.pi-paragraph
    img(:src="content")
</template>

<script>
export default {
  props: ["nodeStyle", "content"]
}
</script>
