<template>
  <div v-if="global">
    <p class="mr-1 text-base font-bold leading-5 text-primary-gray text-start">
      Aplicativos disponíveis;
    </p>
    <ul class="space-y-4 text-lg font-normal text-start text-secondary-gray">
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />Wordpress;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        Drupal;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />entre
        outros...
      </li>
    </ul>
  </div>
  <div v-else>
    <p class="mr-1 text-base font-bold leading-5 text-primary-gray text-start">
      Migração Gratuita;
    </p>
    <ul
      class="mb-4 space-y-4 text-lg font-normal text-start text-secondary-gray"
    >
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />Migramos
        todos seus sites para nossos servidores;
      </li>
    </ul>

    <p class="mr-1 text-base font-bold leading-5 text-primary-gray text-start">
      Você ainda tem
    </p>
    <ul class="space-y-4 text-lg font-normal text-start text-secondary-gray">
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />Webmail
        RoundCube;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        AntiSpam;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        Painel de gerenciamento de DNS;
      </li>

      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        Painel de controle web;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        Configurações de PHP personalizáveis;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        Certificado SSL Grátis;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />entre
        Transferência ilimitada.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CheckIcon from "vue-material-design-icons/Check.vue";

export default defineComponent({
  name: "SharedDescriptionComponent",
  components: {
    CheckIcon,
  },
  props: {
    global: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
