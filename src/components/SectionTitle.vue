<template>
  <div
    class="flex flex-col items-center justify-center w-full max-w-2xl mb-5 space-y-7"
  >
    <img src="../assets/logo.svg" />
    <div class="flex max-w-xl text-2xl font-bold text-center">
      <p class="mr-1 text-primary-gray">
        Você está muito próximo de mudar a forma de
        <SmartLink
          label="hospedar seu site"
          :underline="true"
          href="#"
          :primary-pink="true"
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmartLink from "../components/SmartLink.vue";

export default defineComponent({
  name: "SectionTitleComponent",
  components: {
    SmartLink,
  },
});
</script>
