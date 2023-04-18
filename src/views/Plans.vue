<template>
  <div class="flex flex-col items-center justify-center">
    <SectionTitle />
    <p class="text-[#0F1522] md:my-8 mt-4">Escolha seu plano</p>
    <div
      class="flex flex-col mx-4 md:space-x-4 justify-items-center md:flex-row lg:space-x-8"
    >
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="w-full my-4 md:w-fit md:my-0"
        :class="{ 'order-first md:order-none': index === 1 }"
      >
        <Plan
          :description="plan.description"
          :planName="plan.planName"
          :idealFor="plan.idealFor"
          :planIndex="plan.planIndex"
          :price="plan.price"
          :isMostUsedPlan="plan.isMostUsedPlan"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import Plan from "@/components/Plan.vue";

export default defineComponent({
  name: "PlansPage",
  components: {
    SectionTitle,
    Plan,
  },
  data() {
    return {
      plans: [
        {
          price: 0,
          description: "você não paga nada para usar sem taxa de setup",
          planName: "Hospedagem 1",
          idealFor: "Ideal para quem está começando.",
          planIndex: 0,
        },
        {
          price: 499,
          description: "cobrado mensalmente sem taxa de setup",
          planName: "Hospedagem 2",
          idealFor: "Ideal para site com mais mais de 30k de visitas.",
          planIndex: 1,
          isMostUsedPlan: true,
        },
        {
          price: 999,
          description: "cobrado mensalmente sem taxa de setup",
          planName: "Hospedagem 3",
          idealFor: "Ideal para site com mais mais de 60k de visitas.",
          planIndex: 2,
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
});
</script>
