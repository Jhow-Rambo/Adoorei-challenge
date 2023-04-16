import InputComponent from "../components/Input.vue";

export default {
  title: "General/InputComponent",
  component: InputComponent,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
    downLabel: {
      control: {
        type: "object",
        fields: {
          message: { control: "text" },
          isOnTheRight: { control: "boolean" },
          smartLinkPath: { control: "text" },
        },
      },
    },
    inputValidation: {
      control: {
        type: "object",
        fields: {
          isInvalid: { control: "boolean" },
          message: { control: "text" },
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
  type: "text",
};

export const WithDownLabel = Template.bind({});
WithDownLabel.args = {
  label: "Label",
  placeholder: "Placeholder",
  type: "text",
  downLabel: {
    message: "Additional label",
    isOnTheRight: true,
    smartLinkPath: "",
  },
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: "Label",
  placeholder: "Placeholder",
  type: "text",
  inputValidation: {
    isInvalid: true,
    message: "Invalid input",
  },
};
