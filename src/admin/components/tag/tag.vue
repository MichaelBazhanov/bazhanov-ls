<template>

  <div :class="['tag', {interactive:interactive}]" v-if="interactive">
    <span>{{title}}</span>
    <icon
      grayscale
      symbol="cross"
      class="tag-close"
      v-on="$listener"
      @click="$emit('remove', $event )"
    />
  </div>

  <div class="tag" v-else >
    {{title}}
  </div>

</template>

<script>
import icon from "../icon";

export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    interactive: Boolean
  },
  components: {
    icon
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>