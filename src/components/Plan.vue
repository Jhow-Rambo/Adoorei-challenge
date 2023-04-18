<template>
  <div class="relative w-full border rounded border-ice-blue">
    <span
      v-if="isMostUsedPlan || isSelectedPlan"
      class="absolute top-0 flex items-center justify-center px-6 py-2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl left-1/2 whitespace-nowrap"
      :class="{
        'bg-black': isSelectedPlan,
        'bg-primary-green': !isSelectedPlan,
      }"
    >
      <p v-if="!isSelectedPlan" class="text-sm font-medium text-white">
        MAIS USADO
      </p>

      <p v-else class="text-sm font-medium text-white">PLANO ESCOLHIDO</p>
    </span>
    <div
      class="flex flex-col items-center w-full px-6 py-8 space-y-6 overflow-hidden text-center lg:px-14"
      :class="{ 'h-[700px]': isSelectedPlan }"
    >
      <p class="text-2xl font-bold text-secondary-gray">{{ planName }}</p>

      <h2 v-if="price" class="text-4xl font-bold text-primary-pink">
        <span class="text-2xl">R$</span>{{ price
        }}<span class="text-2xl">/mês</span>
      </h2>

      <h2 v-else class="text-4xl font-bold text-center text-primary-pink">
        Grátis
      </h2>

      <p class="text-sm font-normal text-secondary-gray">
        {{ description }}
      </p>

      <div class="py-4 border border-y border-light-gray border-1 border-x-0">
        <p class="text-lg font-normal text-secondary-gray">
          {{ idealFor }}
        </p>
      </div>

      <p
        v-if="showPlan === false"
        class="text-lg font-bold cursor-pointer text-secondary-gray md:hidden"
        @click="toggleShowPlan"
      >
        Ver mais
      </p>

      <component :is="planDescription[planIndex]" v-if="showPlan" />

      <p
        v-if="showPlan === true"
        class="text-lg font-bold cursor-pointer text-secondary-gray md:hidden"
        @click="toggleShowPlan"
      >
        Ver menos
      </p>

      <div
        v-if="isSelectedPlan"
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[348px] pt-8 px-14 bg-gradient-to-t from-transparent to-white"
      >
        <Button label="Trocar plano" class="w-full" />

        <span class="block w-full h-10 bg-white"></span>
      </div>

      <div v-else>
        <Button
          label="ESCOLHER ESSE PLANO"
          :is-primary="true"
          @click="choosePlan"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import Button from "./Button.vue";
import Plan1 from "../mocks/Plan1.vue";
import Plan2 from "../mocks/Plan2.vue";
import Plan3 from "../mocks/Plan3.vue";
import IPlanProps from "@/types/PlanProps";

export default defineComponent({
  name: "PlanComponent",
  components: {
    Button,
  },
  props: {
    planName: {
      type: String as PropType<IPlanProps["planName"]>,
      required: true,
    },
    price: {
      type: Number as PropType<IPlanProps["price"]>,
      default: 0,
    },
    description: {
      type: String as PropType<IPlanProps["description"]>,
      required: true,
    },
    idealFor: {
      type: String as PropType<IPlanProps["idealFor"]>,
      required: true,
    },
    planIndex: {
      type: Number as PropType<IPlanProps["planIndex"]>,
      required: true,
    },
    isSelectedPlan: {
      type: Boolean as PropType<IPlanProps["isSelectedPlan"]>,
      default: false,
    },
    isMostUsedPlan: {
      type: Boolean as PropType<IPlanProps["isSelectedPlan"]>,
      default: false,
    },
  },
  data() {
    return {
      showPlan: true,
      isMobile: false,
      planDescription: {
        0: Plan1,
        1: Plan2,
        2: Plan3,
      } as { [k: number]: any },
    };
  },
  methods: {
    toggleShowPlan() {
      this.showPlan = !this.showPlan;
    },
    choosePlan() {
      const selectedPlan = {
        planName: this.planName,
        price: this.price,
        description: this.description,
        idealFor: this.idealFor,
        planIndex: this.planIndex,
      };
      this.$store.dispatch("selectPlan", selectedPlan);
    },
  },
  mounted() {
    this.isMobile = window.innerWidth < 768;
    if (this.isMobile) this.showPlan = false;
  },
});
</script>
