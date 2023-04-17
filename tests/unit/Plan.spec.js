import { shallowMount } from "@vue/test-utils";
import PlanComponent from "@/components/Plan.vue";

// MOCKS:
jest.mock("vue-material-design-icons/Check.vue", () => "");

describe("PlanComponent", () => {
  it("displays the plan name", () => {
    const wrapper = shallowMount(PlanComponent, {
      props: {
        planName: "Basic Plan",
        price: 19.99,
        description: "This is the basic plan",
        idealFor: "Small businesses",
        planIndex: 0,
        isSelectedPlan: false,
        isMostUsedPlan: false,
      },
    });

    expect(wrapper.find(".text-secondary-gray").text()).toContain("Basic Plan");
  });

  it("displays the price when a price is provided", () => {
    const wrapper = shallowMount(PlanComponent, {
      props: {
        planName: "Basic Plan",
        price: 19.99,
        description: "This is the basic plan",
        idealFor: "Small businesses",
        planIndex: 0,
        isSelectedPlan: false,
        isMostUsedPlan: false,
      },
    });

    expect(wrapper.find(".text-primary-pink").text()).toContain("R$");
    expect(wrapper.find(".text-primary-pink").text()).toContain("19.99/mês");
  });
});
