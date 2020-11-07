import appInput from "../input.vue";
import { action } from "@storybook/addon-actions"

const methods = {
  onInput: action('onInput_up')
}

export default {
  title: "input/default",
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
    <app-input v-model="title" @input='onInput'/>
    `,
    // @input='onInput' - это не нужно чисто пример как на storybook всплывает v-model
  methods
});

defaultView.story = {
  name: "Стандартный вид",
};

export const noPaddingsView = () => ({
  components: { appInput },
  template: `
    <app-input noSidePaddings />
  `,
});

noPaddingsView.story = {
  name: "Без отступов",
};


export const labeledView = () => ({
  components: { appInput },
  template: `
    <app-input
      title="Фио"
    />
  `,
});

labeledView.story = {
  name: "С заголовком",
};

export const errorView = () => ({
  components: { appInput },
  template: `
    <app-input
      errorMessage="Произошла ошибка"
    />
  `,
});

errorView.story = {
  name: "С ошибкой",
};


export const typeView = () => ({
  components: { appInput },
  template: `
    <app-input
      type="number"
      min="0"
      max="100"
      maxlength="3"
    />
  `,
});

typeView.story = {
  name: "Другой тип",
};

