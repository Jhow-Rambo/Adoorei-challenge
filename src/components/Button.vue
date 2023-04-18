<template>
  <button
    @click.prevent="emitClickEvent"
    class="w-full px-4 text-base font-normal"
    :class="{
      'text-white rounded bg-primary-pink hover:bg-dark-purple transition duration-300':
        isPrimary,
      'text-black rounded bg-white border-black border-2 ': !isPrimary,
      'py-7': isLageButton,
      'py-4': !isLageButton,
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
    isLageButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClickEvent() {
      this.$emit("click");
    },
  },
});
</script>
