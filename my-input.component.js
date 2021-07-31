export const MyInput = {
  props: ['onInput'],
  template: `
    <input type="text" @input="onInput" />
  `
};