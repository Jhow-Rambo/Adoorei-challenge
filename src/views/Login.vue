<template>
  <div class="flex justify-center w-full h-screen">
    <div
      class="flex flex-col items-center justify-center w-full max-w-2xl m-3 space-y-7"
    >
      <img src="../assets/logo.svg" />
      <form
        class="w-full space-y-6 bg-white border rounded-sm border-ice-blue p-7"
      >
        <h2 class="text-2xl font-bold w-fit">Entre na sua conta</h2>
        <p class="text-lg font-normal text-left w-fit">
          Para acessar sua conta informe seu e-mail e senha
        </p>
        <Input
          type="text"
          label="Nome de usuário"
          placeholder="Seu nome de usuário"
          name="username"
          :input-validation="{
            isInvalid: v$.userData.username.$error,
          }"
          @input="getValue"
        />
        <Input
          type="password"
          label="Senha"
          name="password"
          placeholder="Sua Senha"
          :downLabel="{
            message: 'Esqueci minha senha',
            isOnTheRight: true,
            smartLinkPath: '/',
          }"
          :input-validation="{
            isInvalid: v$.userData.password.$error,
          }"
          @input="getValue"
        />
        <Button
          label="FAZER LOGIN"
          :is-primary="true"
          @click="handleLogin"
          :is-lage-button="true"
        />
      </form>
      <div class="flex">
        <p class="mr-1 text-primary-gray">Ainda não tem conta?</p>
        <SmartLink
          label="Cadastre-se"
          :underline="true"
          href="/plans"
          :primary-pink="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import SmartLink from "@/components/SmartLink.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default defineComponent({
  name: "LoginPage",
  setup: () => ({ v$: useVuelidate() }),
  components: {
    Button,
    Input,
    SmartLink,
  },
  props: {},
  data() {
    return {
      userData: {
        username: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      userData: {
        username: { required },
        password: { required },
      },
    };
  },
  methods: {
    getValue(e: InputEvent) {
      const element = e.target as HTMLInputElement;
      const fieldName = element.name as keyof typeof this.userData;
      this.userData[fieldName] = element.value;
    },
    async handleLogin() {
      this.v$.userData.$touch();

      if (this.v$.userData.$invalid) {
        return;
      }

      const credentials = {
        username: this.userData.username,
        password: this.userData.password,
      };

      try {
        const response = await fetch(
          `${process.env.VUE_APP_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        const data = await response.json();

        const token = data.token;

        localStorage.setItem("token", token);

        this.$router.push("/home");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
