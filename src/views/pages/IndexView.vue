<template>
  <a-layout :style="{ minHeight: '100%' }">
    <!--SIDEBAR-->
    <a-layout-sider :collapsed="collapsed">
      <TheSidebar />
    </a-layout-sider>

    <a-layout :style="{ minHeight: '100%' }">
      <!--HEADER-->
      <TheHeader @collapsed="collapsed = $event" :collapsed="collapsed" />

      <a-layout-content :style="{ padding: '0 16px 16px' }">
        <router-view />
      </a-layout-content>

      <!--FOOTER-->
      <TheFooter />
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import TheHeader from '@/views/layouts/TheHeader.vue'
  import TheSidebar from '@/views/layouts/TheSidebar.vue'
  import TheFooter from '@/views/layouts/TheFooter.vue'
  import { ref } from 'vue'

  const collapsed = ref(false)
</script>

<style lang="scss" scoped></style>
