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
          <!-- :errorMessage="errorMessage" -->
          <!-- @input="$emit('input', $event), validValue($event)" -->
        <app-input
          placeholder="Название новой группы"
          :value="value"
          bold="bold"
          :errorMessage="validation.firstError('title')"

          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        />
      </div>
      <div class="buttons">
        <div class="button-icon">
            <!-- @click="$emit('approve'), onApprove()" -->
          <icon
            :class="[{blocked : value.trim() == ''}]"
            symbol="tick"
            @click="onApprove"
          />
        </div>
        <div class="button-icon">
            <!-- @click="$emit('remove'), valueClick()" -->
            <!-- @click="$emit('remove')" -->
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
		"title": value => { console.log(value)
			return Validator.value(value).required("Не может быть пустым")
		},
	},
  props: {
    value: {
      type: String,
      default: ""
    },
    // errorText: {
    //   type: String,
    //   default: ""
    // },
    blocked: Boolean,
    editModeByDefault: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
      // errorMessage: '',
      // valueInput: ''
    };
  },
  methods: {

    // onApprove() {//наисное событие и клик покнопке
    //   if (this.title.trim() === this.value.trim()) {
    //     console.log(' onApprove true')

    //     if (this.title.trim() == '') {
    //       this.errorMessage = 'Пустая строка';
    //       return false
    //     }
    //     this.editmode = false;
    //   } else {
    //     console.log(' onApprove false')

    //     if (this.value.trim() == '') {
    //       this.errorMessage = 'Пустая строка';
    //       return false
    //     }
    //     this.title = this.value;
    //     this.editmode = false;//снимает редактирование
    //     this.$emit("approve", this.title.trim());
    //     console.log('emit approve editLIne')
    //   }
    // },
    // validValue(value) { console.log(' validValue(value)')
    //   this.valueInput = value;
    //   if (value.trim() == '') {
    //     this.errorMessage = 'Пустая строка';
    //   } else {
    //     this.errorMessage = '';
    //   }
    // },
    // valueClick() { console.log(' valueClick()')
    //   if (this.value.trim() == '') {
    //     this.errorMessage = 'Пустая строка';
    //       return false
    //   }
    //   this.errorMessage = '';
    // }

    async onApprove() {
      this.title = this.value;
      if( await this.$validate() == false) return
      this.editmode = false;
			this.$emit('approve', this.title.trim())
    },
    removeCategory() {
      console.log('remove -> editLine.vue')
      this.$emit('remove');

    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>