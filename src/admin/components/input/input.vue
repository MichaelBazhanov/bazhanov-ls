<template>

  <label
    class="input"
    v-if="fieldType === 'input'"
    :class="[{'bold' : bold}, {'percent' : percent},{'input_labeled':!!title, 'no-side-paddings':noSidePaddings},iconClass,
    {'error':!!errorMessage}]"
  >
    <div class="title" v-if="title">{{title}}</div>
    <input
      ref="inputFocus"
      :class="['input__elem field__elem']"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span class="percent-title">%</span>
    <div class="input__error-tooltip">
      <tooltip :text="errorMessage"></tooltip>
    </div>
  </label>

  <label
    class="textarea"
    v-else-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :class="{'error': !!errorMessage}"
  >
    <div class="title" v-if="title">{{title}}</div>
    <textarea
      class="textarea__elem field__elem"
      :value="value"
      :class="{'error' : !!errorMessage}"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <div class="input__error-tooltip">
      <tooltip :text="errorMessage"></tooltip>
    </div>
  </label>

</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ""
    },
    errorMessage: {
      type: String,
      default: ""
    },
    noSidePaddings: Boolean,
    percent: Boolean,
    bold: Boolean,
    autofocus: Boolean,
    fieldType: {
      type: String,
      default: "input"
    },
    value: [String, Number],
    icon: {
      type: String,
      default: "",
      validator: value => ["", "user", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  mounted() {
    if(this.autofocus) {
      this.$refs.inputFocus.focus()
    }
  },
  components: {
    // tooltip: () => import("./components/tooltip") //не работает при тесте
    tooltip: () => import("../tooltip")
  }
};
</script>

<style lang="postcss" scoped src="./input.pcss"></style>