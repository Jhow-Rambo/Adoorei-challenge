import SectionTitle from "../components/SectionTitle.vue";

export default {
  title: "SectionTitle/Default",
  component: SectionTitle,
  argTypes: {},
};

const Template = (args) => ({
  components: { SectionTitle },
  props: Object.keys(args),
  template: '<SectionTitle v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
