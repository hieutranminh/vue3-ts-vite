<template>
  <a-select
    v-model:value="$i18n.locale"
    style="width: 70px"
    :options="OptionLocale"
    @change="switchLocale"
  />
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { OptionLocale } from '@/core/enums/options.enum';
  import { setLocale } from '@vee-validate/i18n';

  const i18n = useI18n();
  const switchLocale = (locale: any) => {
    i18n.locale.value = locale;
    localStorage.setItem('locale', locale);
    setLocale(locale);
  };
</script>
