import { addParameters } from "@storybook/vue";
import "./main.pcss";// тенем весь css основной разработки в storybook

addParameters({
  backgrounds: [
    { name: "white", value: "#ffffff", default: true },
    { name: "grey", value: "#8395a7" },
  ],
  darkMode: {
    current: "dark",
  },
});
