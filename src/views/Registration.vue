<template>
  <div class="flex items-start justify-center w-full h-screen">
    <div class="flex flex-col items-center justify-center w-full m-3 space-y-7">
      <SectionTitle />

      <div
        class="flex flex-col-reverse w-full max-w-5xl md:space-x-10 md:flex-row"
      >
        <UserRegistration class="w-full md:w-1/2" />
        <Plan
          class="w-full mx-auto mb-5 md:w-1/2 md:mb-0"
          :description="getSelectedPlan.description"
          :ideal-for="getSelectedPlan.idealFor"
          :plan-name="getSelectedPlan.planName"
          :plan-index="getSelectedPlan.planIndex"
          :is-selected-plan="true"
          :price="getSelectedPlan.price"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import UserRegistration from "@/components/UserRegistration.vue";
import Plan from "@/components/Plan.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    SectionTitle,
    UserRegistration,
    Plan,
  },
  computed: {
    ...mapGetters(["getSelectedPlan"]),
  },
  mounted() {
    window.scrollTo(0, 0);
  },
});
</script>
