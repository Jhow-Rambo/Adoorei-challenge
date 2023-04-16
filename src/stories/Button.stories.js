import ButtonComponent from "../components/Button.vue";

export default {
  title: "General/ButtonComponent",
  component: ButtonComponent,
  argTypes: {
    label: { control: "text" },
    isPrimary: { control: "boolean" },
  },
};

const Template = (args) => ({
  components: { ButtonComponent },
  props: Object.keys(args),
  template: '<ButtonComponent v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  isPrimary: true,
};
