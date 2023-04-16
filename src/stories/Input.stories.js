import InputComponent from "../components/Input.vue";

export default {
  title: "General/InputComponent",
  component: InputComponent,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    downLabel: {
      control: {
        type: "object",
        fields: {
          message: { control: "text" },
          isOnTheRight: { control: "boolean" },
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { InputComponent },
  props: Object.keys(args),
  template: '<InputComponent v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  downLabel: {
    message: "Hello World",
    isOnTheRight: true,
  },
};
