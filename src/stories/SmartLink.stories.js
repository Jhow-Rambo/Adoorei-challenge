import SmartLink from "../components/SmartLink.vue";

export default {
  title: "General/SmartLink",
  component: SmartLink,
  argTypes: {
    label: { control: "text" },
    underline: { control: "boolean" },
    primaryPink: { control: "boolean" },
    href: { control: "text" },
  },
};

const Template = (args) => ({
  components: { SmartLink },
  props: Object.keys(args),
  template: '<SmartLink v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  underline: false,
  primaryPink: false,
  href: "#",
};
