import tag from "./tag.vue";
import { action } from "@storybook/addon-actions";

const methods = {
  onRemoveTag: action("onRemoveTag")
}

export default {
  title: "tag",
  components: {tag}
}

export const defaultView = () => ({
  components: { tag },
  template: `
    <tag title="tag" />
  `,
  methods
});

defaultView.story = {
  name: "Стандартный вид",
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
};

export const interactiveView = () => ({
  components: { tag },
  template: `
    <tag
      title="tag"
      interactive
      @remove="onRemoveTag"
    />
  `,
  methods
});

interactiveView.story = {
  name: "С контролом",
};
