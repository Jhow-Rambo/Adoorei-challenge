<template>
  <div class="flex justify-center w-full h-screen">
    <div
      class="flex flex-col items-center justify-center w-full max-w-2xl m-3 space-y-7"
    >
      <form class="w-full space-y-6 border rounded-sm border-ice-blue p-7">
        <h2 class="text-2xl font-bold w-fit">Dados Pessoais</h2>
        <p class="text-lg font-normal text-left w-fit">
          Informe seus dados pessoais para acesso à sua conta
        </p>
        <Input
          type="text"
          label="Nome completo"
          placeholder="Informe seu nome completo"
          name="username"
          :input-validation="{
            isInvalid: v$.userData.username.$error,
            message: errorMessage(v$.userData.username),
          }"
          @input="getValue"
        />
        <Input
          type="number"
          label="Celular"
          placeholder="(99) 99999-0000"
          name="phone"
          :input-validation="{
            isInvalid: v$.userData.phone.$error,
            message: errorMessage(v$.userData.phone),
          }"
          @input="getValue"
        />
        <Input
          type="email"
          label="E-mail"
          placeholder="Informe seu e-mail"
          name="email"
          :input-validation="{
            isInvalid: v$.userData.email.$error,
            message: errorMessage(v$.userData.email),
          }"
          @input="getValue"
        />
        <Input
          type="password"
          label="Senha"
          name="password"
          placeholder=""
          :downLabel="{
            message: 'No mínimo 8 caracteres',
            isOnTheRight: false,
          }"
          :input-validation="{
            isInvalid: v$.userData.password.$error,
            message: errorMessage(v$.userData.password),
          }"
          @input="getValue"
        />

        <Input
          type="password"
          label="Confirme sua senha"
          name="confirmPassword"
          placeholder=""
          :input-validation="{
            isInvalid: v$.userData.confirmPassword.$error,
            message: errorMessage(v$.userData.confirmPassword),
          }"
          @input="getValue"
        />

        <div class="py-4 border border-y border-light-gray border-1 border-x-0">
          <p class="mb-3 text-2xl font-bold w-fit">Dados do seu site</p>
          <Input
            type="text"
            label="Nome do seu site"
            name="siteName"
            placeholder="Meu site"
            :downLabel="{
              message: 'Exatamente igual o título do seu site',
              isOnTheRight: false,
            }"
            :input-validation="{
              isInvalid: v$.userData.siteName.$error,
              message: errorMessage(v$.userData.siteName),
            }"
            @input="getValue"
          />
        </div>
        <div class="flex flex-col items-start text-start">
          <div class="flex items-start">
            <Checkbox label="" @update:checked="getValue" name="acceptTerms" />
            <p>
              Ao concluir com seu cadastro você concorda com nossos
              <SmartLink label="termos de uso" href="/" :underline="true" />
              e
              <SmartLink
                label="politicas de privacidade."
                href="/"
                :underline="true"
              />
            </p>
          </div>
          <span
            v-show="v$.userData.acceptTerms.$error"
            class="w-full font-medium text-red-error text-start"
            >Campo Obrigatório</span
          >
        </div>

        <Button label="CRIAR CONTA" :is-primary="true" @click="handleLogin" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";
import SmartLink from "./SmartLink.vue";
import Input from "./Input.vue";
import Checkbox from "./Checkbox.vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  numeric,
  minLength,
  maxLength,
  sameAs,
  email,
} from "@vuelidate/validators";

export default defineComponent({
  name: "UserRegistrationComponent",
  setup: () => ({ v$: useVuelidate() }),
  components: {
    Input,
    Checkbox,
    SmartLink,
    Button,
  },
  props: {},
  data() {
    return {
      userData: {
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        siteName: "",
        acceptTerms: null,
      },
    };
  },
  validations() {
    return {
      userData: {
        username: { required, minLength: minLength(3) },
        phone: {
          required,
          numeric,
          minLength: minLength(10),
          maxLength: maxLength(11),
        },
        email: { required, email },
        password: { required, minLength: minLength(8) },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.userData.password),
        },
        siteName: { required },
        acceptTerms: { required },
      },
    };
  },
  methods: {
    getValue(e: InputEvent) {
      const element = e.target as HTMLInputElement;
      const fieldName = element.name as keyof typeof this.userData;
      let fieldValue =
        element.type === "checkbox" ? element.checked : element.value;
      this.userData[fieldName] = fieldValue;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorMessage(validation: { $dirty: any; required: any }) {
      return !validation.$dirty
        ? ""
        : validation.required.$invalid
        ? "Campo obrigatório"
        : "Campo inválido";
    },

    async handleLogin() {
      this.v$.userData.$touch();

      if (this.v$.userData.$invalid) {
        return;
      }

      const credentials = {
        email: this.userData.email,
        username: this.userData.username,
        password: this.userData.password,
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: this.userData.phone,
      };

      try {
        const response = await fetch(`https://fakestoreapi.com/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        response.status === 200 && this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
