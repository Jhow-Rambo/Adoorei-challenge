<template>
  <router-link
    :to="{ path: href }"
    role="link"
    class="leading-5 cursor-pointer"
    :class="{
      'underline underline-offset-6': underline,
      'text-primary-pink': primaryPink,
      'text-primary-gray': !primaryPink,
    }"
  >
    {{ label }}
  </router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ISmartLinkProps from "@/types/SmartLinkProps";

export default defineComponent({
  name: "SmartLink",
  props: {
    label: {
      type: String as PropType<ISmartLinkProps["label"]>,
      required: true,
    },
    underline: {
      type: Boolean as PropType<ISmartLinkProps["underline"]>,
      default: false,
    },
    primaryPink: {
      type: Boolean as PropType<ISmartLinkProps["primaryPink"]>,
      default: false,
    },
    href: {
      type: String as PropType<ISmartLinkProps["href"]>,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>
