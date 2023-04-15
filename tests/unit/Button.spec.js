import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/Button.vue";

describe("ButtonComponent", () => {
  it("should render button label", () => {
    const label = "Clique aqui";
    const wrapper = mount(ButtonComponent, {
      props: { label },
    });

    expect(wrapper.text()).toMatch(label);
  });

  it("should emit click event", async () => {
    const label = "Clique aqui";
    const wrapper = mount(ButtonComponent, {
      props: { label },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
