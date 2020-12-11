import { addParameters } from "@storybook/vue";
import "./main.pcss";// тенем весь css основной разработки в storybook

// addParameters({
//   backgrounds: [
//     { name: "white", value: "#ffffff", default: true },
//     { name: "grey", value: "#8395a7" },
//   ],
//   darkMode: {
//     current: "dark",
//   },
// });

addParameters({
  backgrounds: {
    default: 'bazhanov',
    values: [
        {
            name: 'bazhanov',
            value: '#ffffff'
        },
        {
            name: 'grey',
            value: '#8395a7'
        },
        {
            name: 'facebook',
            value: '#3b5998'
        },
      ],
  },
  darkMode: {
    current: "dark",
  },
});