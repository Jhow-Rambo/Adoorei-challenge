import { mount } from "@vue/test-utils";
import InputComponent from "../../src/components/Input.vue";

describe("InputComponent", () => {
  test("renders correctly", () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        label: "Label",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("emits input event when input is changed", () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        label: "Label",
        placeholder: "Placeholder",
      },
    });

    const input = wrapper.find("input");
    input.setValue("New Value");
    expect(wrapper.emitted().input[0]).toEqual(["New Value"]);
  });
});
