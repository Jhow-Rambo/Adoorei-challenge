<template>
  <div class="flex items-center">
    <label
      class="flex items-center w-5 h-5 border-2 rounded-md cursor-pointer text-primary-pink border-primary-pink"
    >
      <input
        type="checkbox"
        role="checkbox"
        class="appearance-none"
        :checked="isChecked"
        @change="handleChange"
      />
      <CheckIcon v-if="isChecked" fillColor="#F30168" size="15" />
    </label>

    <span class="ml-2 text-primary-gray">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckIcon from "vue-material-design-icons/Check.vue";

export default defineComponent({
  name: "CheckboxComponent",
  components: {
    CheckIcon,
  },
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["update:checked"],
  methods: {
    handleChange(event: Event) {
      this.isChecked = !this.isChecked;
      const target = event.target as HTMLInputElement;
      this.$emit("update:checked", target.checked);
    },
  },
});
</script>
