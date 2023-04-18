<template>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-start">
      <p
        class="mr-1 text-base font-bold leading-5 text-primary-gray text-start"
      >
        Seu site em servidores
        <SmartLink label="no Brasil." :underline="true" href="/" />
      </p>
    </div>
    <ul class="space-y-4 text-lg font-normal text-start text-secondary-gray">
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />Servidores
        em nossos data center de São Paulo;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />
        ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP
        5.3, 5.4, 5.5, 5.6 e 7.0;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />10 usuário
        de FTP para upload ou download;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />30 contas
        de e-mails profissionais;
      </li>
      <li class="flex align-text-top">
        <CheckIcon fillColor="#292D32" size="15" class="mt-1 mr-2" />10
        subdomínio gratuito;
      </li>
    </ul>
    <p class="mr-1 text-base font-bold leading-5 text-primary-gray text-start">
      Suporte 24 horas, 7 dias por semana grátis;
    </p>

    <SharedDescription :global="true" />
    <SharedDescription :global="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmartLink from "../components/SmartLink.vue";
import CheckIcon from "vue-material-design-icons/Check.vue";
import SharedDescription from "./sharedDescription.vue";

export default defineComponent({
  name: "Plan2Component",
  components: {
    SmartLink,
    CheckIcon,
    SharedDescription,
  },
});
</script>
