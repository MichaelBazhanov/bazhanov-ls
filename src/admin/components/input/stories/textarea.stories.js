import appInput from "../input.vue";
import { action } from "@storybook/addon-actions"

const methods = {
  onInput: action('onInput_up')
}

export default {
  title: "input/textarea",
  component: appInput,
};

export const defaultView = () => ({
  components: { appInput },
  data() {
    return {
      title : "Текст"
    }
  },
  template: `
    <app-input fieldType="textarea" v-model="title" @input='onInput'/>
    `,
    // @input='onInput' - это не нужно чисто пример как на storybook всплывает v-model
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};

export const labeledView = () => ({
  components: { appInput },
  template: `
    <app-input title="Сообщение" fieldType="textarea" />
  `,
});

labeledView.story = {
  name: "С заголовком",
};

export const errorView = () => ({
  components: { appInput },
  template: `
    <app-input
      errorMessage="Ошибка"
      title="Заголовок"
      fieldType="textarea" />
  `,
});

errorView.story = {
  name: "С ошибкой",
};
