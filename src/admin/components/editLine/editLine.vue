<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon
          symbol="pencil"
          grayscale
          @click="editmode = true, $emit('blocked')"
        ></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input" >
        <app-input
          :errorMessage="errorMessage"
          placeholder="Название новой группы"
          :value="value"


          @input="$emit('input', $event), validValue($event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
        ></app-input>
        <!-- :errorText="errorText" -->
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon
            symbol="tick"
            @click="$emit('approve'), onApprove()"
            :class="[{blocked : value.trim() == ''}]"
          ></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="$emit('remove'), valueClick()"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      editmode: this.editModeByDefailt,
      title: this.value,
      errorMessage: '',
      valueInput: ''
    };
  },
  methods: {
    onApprove() {//наисное событие и клик покнопке
      if (this.title.trim() === this.value.trim()) { console.log(' onApprove true')
        if (this.title.trim() == '') {
          this.errorMessage = 'Пустая строка';
          return false
        }
        this.editmode = false;
      } else { console.log(' onApprove false')
        if (this.value.trim() == '') {
          this.errorMessage = 'Пустая строка';
          return false
        }
        this.title = this.value;
        this.editmode = false;//снимает редактирование
        this.$emit("approve", this.title.trim());
      }
    },
    validValue(value) { console.log(' validValue(value)')
      this.valueInput = value;
      if (value.trim() == '') {
        this.errorMessage = 'Пустая строка';
      } else {
        this.errorMessage = '';
      }
    },
    valueClick() { console.log(' valueClick()')

      // console.log('this.value ',this.value)
      // console.log('this.title ',this.title)
      if (this.value.trim() == '') {
        this.errorMessage = 'Пустая строка';
          return false
      }
      // this.title = '-----------';
      // this.value = '-----------';
      // this.editmode = false;
      this.errorMessage = '';
    }

  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>