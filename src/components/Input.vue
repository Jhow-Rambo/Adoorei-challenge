<template>
  <div data-cy="input-container" class="flex flex-col justify-start">
    <label
      data-cy="input-label"
      class="text-sm text-primary-gray w-fit"
      for="input"
      >{{ label }}</label
    >
    <input
      data-cy="input-field"
      class="placeholder:text-primary-gray w-full py-4 pl-2 text-primary-gray border rounded focus:outline-none focus:shadow-outline border-#515D7480"
      type="text"
      :placeholder="placeholder"
      @input="$emit('input', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import IInputProps from "@/types/InputProps";

export default defineComponent({
  name: "InputComponent",
  props: {
    placeholder: {
      type: String as PropType<IInputProps["placeholder"]>,
      required: true,
    },
    label: {
      type: String as PropType<IInputProps["label"]>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
