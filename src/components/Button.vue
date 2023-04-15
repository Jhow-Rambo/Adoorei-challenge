<template>
  <button
    @click="emitClickEvent"
    class="text-lg font-normal w-full px-4 text-white rounded bg-primary-pink py-[30px]"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IButtonProps from "@/types/ButtonProps";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    label: {
      type: String as PropType<IButtonProps["label"]>,
      required: true,
    },
  },
  data() {
    return {
      buttonClass: "px-4 py-2 rounded bg-blue-500 text-white",
    };
  },
  methods: {
    emitClickEvent() {
      this.$emit("click");
    },
  },
});
</script>
