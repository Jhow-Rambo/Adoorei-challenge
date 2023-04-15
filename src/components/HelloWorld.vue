<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MyComponent",
  props: {
    message: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data() {
    return {
      foo: 1,
    };
  },
  methods: {
    plus() {
      this.foo++;
    },
  },
  beforeCreate() {
    console.log("Before Create");
  },
});
</script>
