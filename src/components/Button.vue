<template>
  <button
    @click="emitClickEvent"
    class="text-lg font-normal w-full px-4 py-[30px]"
    :class="{
      'text-white rounded bg-primary-pink ': isPrimary,
      'text-black rounded bg-white border-black border-2': !isPrimary,
    }"
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
    isPrimary: {
      type: Boolean as PropType<IButtonProps["isPrimary"]>,
      default: false,
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
