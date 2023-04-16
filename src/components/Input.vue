<template>
  <div class="flex flex-col justify-start w-full">
    <label class="text-sm text-primary-gray w-fit" for="input">{{
      label
    }}</label>
    <input
      class="placeholder:text-primary-gray py-4 pl-2 text-primary-gray border rounded focus:outline-none focus:shadow-outline border-#515D7480"
      type="text"
      :placeholder="placeholder"
      @input="$emit('input', ($event.target as HTMLInputElement).value)"
    />
    <template v-if="downLabel">
      <div
        class="flex w-full"
        :class="{ 'justify-end': downLabel.isOnTheRight }"
      >
        <label for="input" class="w-fit">{{ downLabel.message }}</label>
      </div>
    </template>
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
    downLabel: {
      type: Object as PropType<IInputProps["downLabel"]>,
      default: null,
    },
  },
});
</script>
