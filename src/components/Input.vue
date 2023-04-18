<template>
  <div class="flex flex-col justify-start w-full">
    <label class="text-sm text-primary-gray w-fit" for="input">{{
      label
    }}</label>
    <input
      class="py-4 pl-2 border rounded placeholder:text-primary-gray text-primary-gray focus:outline-none focus:shadow-outline border-blue-gray-80"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
    />
    <div
      class="flex justify-between"
      :class="{ 'flex-row-reverse': downLabel && downLabel.isOnTheRight }"
    >
      <div
        v-if="downLabel"
        class="flex w-full"
        :class="{ 'justify-end': downLabel.isOnTheRight }"
      >
        <label
          v-if="!downLabel.smartLinkPath"
          for="input"
          class="w-fit text-blue-gray"
          >{{ downLabel.message }}</label
        >
        <router-link
          v-else
          :to="downLabel.smartLinkPath"
          role="link"
          class="cursor-pointer w-fit text-blue-gray"
        >
          {{ downLabel.message }}
        </router-link>
      </div>

      <span
        v-show="inputValidation && inputValidation.isInvalid"
        class="w-full font-medium text-red-error text-start"
        :class="{ 'text-end': downLabel && !downLabel.isOnTheRight }"
        >{{ inputValidation?.message || "Campo obrigatório" }}</span
      >
    </div>
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
    inputValidation: {
      type: Object as PropType<IInputProps["inputValidation"]>,
      default: null,
    },
    name: {
      type: String as PropType<IInputProps["name"]>,
      required: true,
    },
    type: {
      type: String as PropType<IInputProps["type"]>,
      required: true,
    },
  },
});
</script>
