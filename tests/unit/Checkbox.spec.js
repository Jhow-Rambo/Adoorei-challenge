import { mount } from "@vue/test-utils";
import CheckboxComponent from "@/components/Checkbox.vue";

// MOCKS:
jest.mock("vue-material-design-icons/Check.vue", () => "");

describe("CheckboxComponent", () => {
  it("renders the checkbox label correctly", () => {
    const label = "Test Checkbox Label";
    const wrapper = mount(CheckboxComponent, {
      props: { label },
    });

    expect(wrapper.find("span").text()).toBe(label);
  });
});
