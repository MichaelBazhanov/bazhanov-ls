<template>
  <button
    :class="['default-btn-container', 'btn-decorator', { disabled }, { plain }]"
    v-if="typeAttr === 'button'"
    v-on="$listeners"
    :disabled="disabled"
  >
    {{ title }}
  </button>

  <label class="btn-file-container" v-else-if="typeAttr === 'file'">
    <div class="btn-file-fake btn-decorator">{{ title }}</div>
    <input class="btn-file-input" type="file" v-on="$listeners" v-if="accept"  accept="image/*" />
    <input class="btn-file-input" type="file" v-on="$listeners" v-else />
  </label>

  <label
    :class="['btn-file-container']"
    v-else-if="typeAttr === 'fileWork'"
  >
    <div :class="['btn-file-fake', 'btn-decorator', { plain }]">{{ title }}</div>
    <input class="btn-file-input" type="file" v-on="$listeners" v-if="accept" accept="image/*" />
    <input class="btn-file-input" type="file" v-on="$listeners" v-else />
  </label>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Отправить",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plain: Boolean,
    typeAttr: {
      type: String,
      default: "button",
      validator: (value) => ["button", "file", "fileWork"].includes(value),
    },
    accept: Boolean,
  },
};
</script>

<style lang="postcss" scoped src="./defaultBtn.pcss"></style>