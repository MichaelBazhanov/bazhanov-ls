<template>
  <!-- Метакомпонент» для отрисовки динамических компонентов. Настоящий компонент для отрисовки определяется параметром is: -->
  <component
    :is="type"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {
    default: () => import("./types/defaultBtn"),
    square: () => import("./types/squareBtn"),
    iconed: () => import("./types/iconedBtn"),
    round: () => import("./types/roundBtn"),
  }
}
</script>