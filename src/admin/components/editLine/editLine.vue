<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">

    <div class="title" v-if="editmode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon
          symbol="pencil"
          grayscale
          @click="editmode = true, $emit('blocked')"
        />
      </div>
    </div>

    <div v-else class="title">
      <div class="input" >
        <app-input
          bold="bold"
          no-side-paddings="no-side-paddings"
          :errorMessage="validation.firstError('title')"

          :value="value"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          placeholder="Название новой группы"
          autofocus="autofocus"
        />
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon
            :class="[{blocked : value.trim() == ''}]"
            symbol="tick"
            @click="onApprove"
          />
        </div>
        <div class="button-icon">
          <icon
            symbol="cross"
            @click="removeCategory"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
  mixins: [ValidatorMixin],
	validators: {
		"title": value => {
			return Validator.value(value).required("Не может быть пустым")
		},
	},
  props: {
    value: {
      type: String,
      default: ""
    },
    blocked: Boolean,
    editModeByDefault: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
    };
  },
  methods: {
    async onApprove() {
      this.title = this.value;
      if( await this.$validate() == false) return
      this.editmode = false;
			this.$emit('approve', this.title.trim())
    },
    removeCategory() {
      this.$emit('remove');
    }
  },
  components: {
    // icon: () => import("components/icon"), //динамический импорт (не рабочий при тесте => папка компонент не видна)
    // appInput: () => import("components/input") //динамический импорт (не рабочий при тесте => папка компонент не видна)
    icon: () => import("../icon"), //динамический импорт
    appInput: () => import("../input") //динамический импорт
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>