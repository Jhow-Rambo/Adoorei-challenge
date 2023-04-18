import { mount } from "@vue/test-utils";
import SmartLink from "@/components/SmartLink.vue";

describe("SmartLink", () => {
  it("renders label text", () => {
    const label = "Link Label";
    const wrapper = mount(SmartLink, {
      props: {
        label,
        href: "/",
      },
    });
    expect(wrapper.text()).toContain(label);
  });

  it("renders with underline when prop is true", () => {
    const wrapper = mount(SmartLink, {
      props: {
        label: "Link Label",
        href: "/",
        underline: true,
      },
    });
    expect(wrapper.classes()).toContain("underline");
    expect(wrapper.classes()).toContain("underline-offset-6");
  });

  it("renders with primaryPink class when prop is true", () => {
    const wrapper = mount(SmartLink, {
      props: {
        label: "Link Label",
        href: "/",
        primaryPink: true,
      },
    });
    expect(wrapper.classes()).toContain("text-primary-pink");
  });
});
