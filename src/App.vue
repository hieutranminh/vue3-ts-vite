<template>
  <router-view />
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { setLocale } from '@vee-validate/i18n'

  // Set init locale
  const i18n = useI18n()
  const setInitLocale = () => {
    const locale = localStorage.getItem('locale')
    if (locale) {
      i18n.locale.value = locale
      setLocale(locale)
    }
  }
  setInitLocale()
</script>

<style>
  #app {
    height: 100%;
  }
</style>
