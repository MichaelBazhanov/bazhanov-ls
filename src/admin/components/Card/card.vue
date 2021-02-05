<template>

  <div class="card-component card_plain" v-if="simple" ref="card-component-simple">
    <slot name="default"></slot>
  </div>

  <div class="card-component" v-else-if="slim" ref="card-component-slim">
    <div class="header header_plain">
      <div class="text" v-text="title"></div>
      <slot name="title" v-if="!!title === false"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>

  <div class="card-component" v-else ref="card-component-default">
    <div class="header">
      <div class="text" v-text="title"></div>
      <slot name="title" v-if="!!title === false"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    simple: Boolean,
    slim: Boolean,
  }
};
</script>


<style lang="postcss" src="./card.pcss" scoped>
</style>

