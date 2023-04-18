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

  it("emits input event when input is changed", async () => {
    const wrapper = mount(InputComponent, {
      props: {
        placeholder: "Enter your name",
        label: "Name",
        name: "name",
        type: "text",
      },
    });
    const input = wrapper.find("input");
    const inputEvent = { target: { value: "John Doe" } };
    await input.setValue(inputEvent.target.value);
    expect(wrapper.emitted().input).toBeTruthy();
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
