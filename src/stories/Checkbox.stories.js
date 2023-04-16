import Checkbox from "../components/Checkbox.vue";

export default {
  title: "General/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Checkbox },
  props: Object.keys(args),
  template: '<Checkbox v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
