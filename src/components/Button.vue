<template>
  <button
    @click.prevent="emitClickEvent"
    class="text-base font-normal w-full px-4 py-[30px]"
    :class="{
      'text-white rounded bg-primary-pink hover:bg-dark-purple transition duration-300':
        isPrimary,
      'text-black rounded bg-white border-black border-2 ': !isPrimary,
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
  methods: {
    emitClickEvent() {
      this.$emit("click");
    },
  },
});
</script>
