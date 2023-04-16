import { mount } from "@vue/test-utils";
import InputComponent from "../../src/components/Input.vue";

describe("InputComponent", () => {
  it("renders correctly", () => {
    const wrapper = mount(InputComponent, {
      propsData: {
        label: "Label",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("emits input event when input is changed", () => {
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

  it("renders the down label when provided", () => {
    const downLabel = {
      message: "Lorem Ipsum",
      isOnTheRight: true,
    };
    const wrapper = mount(InputComponent, {
      propsData: {
        label: "Label",
        placeholder: "Placeholder",
        downLabel: downLabel,
      },
    });

    const downLabelEl = wrapper.find(".flex.justify-end label");
    expect(downLabelEl.text()).toBe(downLabel.message);
  });
});
