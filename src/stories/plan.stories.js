import Plan from "../components/Plan.vue";

export default {
  title: "Plans/Plan/Default",
  component: Plan,
  argTypes: {
    planName: { control: { type: "text" } },
    price: { control: { type: "number" } },
    description: { control: { type: "text" } },
    idealFor: { control: { type: "text" } },
    planIndex: { control: { type: "number" } },
    isSelectedPlan: { control: { type: "boolean" } },
    isMostUsedPlan: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  components: { Plan },
  props: args,
  template: '<Plan v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  planName: "Plano Standard",
  price: 0,
  description: "Descrição do Plano Standard",
  idealFor: "Ideal para pessoas físicas",
  planIndex: 0,
  isSelectedPlan: true,
  isMostUsedPlan: true,
};
