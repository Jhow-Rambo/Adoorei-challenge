import UserRegistration from "../components/UserRegistration.vue";

export default {
  title: "Forms/UserRegistration",
  component: UserRegistration,
  argTypes: {},
};

const Template = (args) => ({
  components: { UserRegistration },
  props: Object.keys(args),
  template: '<UserRegistration v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
