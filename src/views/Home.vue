<template>
  <div class="flex justify-center w-full">
    <div
      class="flex flex-col items-center justify-between w-full p-4 space-y-10 max-w-7xl mt-7"
    >
      <div class="relative flex items-center justify-between w-full">
        <img src="../assets/logo.svg" />
        <div class="absolute top-0 right-0 flex flex-col items-end">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-silver"
            @click="showLogoutButton = !showLogoutButton"
          >
            <p class="text-lg font-bold text-white">J</p>
          </div>
          <button
            v-if="showLogoutButton"
            @click="logout"
            class="px-5 py-2 mt-2 text-white rounded-md bg-primary-pink"
          >
            Sair
          </button>
        </div>
      </div>
      <div class="flex flex-col w-full max-w-3xl space-y-3">
        <h2 class="text-2xl font-bold w-fit">Olá João,</h2>
        <p class="text-lg font-normal text-left w-fit">
          Seja bem vindo a sua conta de hospedagem.
        </p>
        <iframe
          class="w-full h-72 md:h-[648px]"
          src="https://www.youtube.com/embed/noq-ZHTD2Cg"
          title="The Nuxt big thing in web development?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p class="py-5 text-left w-fit">
          Caso tenha alguma dúvida,<SmartLink
            label="visite nossa central de ajuda."
            href="#"
            :underline="true"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmartLink from "@/components/SmartLink.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    SmartLink,
  },
  data() {
    return {
      showLogoutButton: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");

      this.$router.push("/");
    },
  },
  beforeUnmount() {
    localStorage.removeItem("token");
  },
});
</script>
