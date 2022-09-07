<template>
  <section class="widget">
    <!--HEAD-->
    <TheBreadcrumb />

    <!--ACTION-->
    <a-space class="action">
      <!--Filter-->
      <a-button type="default">
        <template #icon>
          <FilterOutlined />
        </template>
        {{ $t('btn.filter') }}
      </a-button>

      <!--Create-->
      <a-button type="primary">
        <template #icon>
          <PlusOutlined />
        </template>
        {{ $t('btn.import') }}
      </a-button>
    </a-space>
  </section>

  <!--SEARCH-->
  <section class="container">Search</section>

  <!--TABLE-->
  <section class="container">Table</section>
</template>

<script setup lang="ts">
  import TheBreadcrumb from '@/views/layouts/TheBreadcrumb.vue'
</script>

<style lang="scss" scoped></style>
