<template>
  <div>
    <router-link :to="{ name: 'AdminCreate' }" custom v-slot="{ navigate }">
      <a-button @click="navigate" type="primary">Create</a-button>
    </router-link>

    <router-link :to="{ name: 'AdminEdit', params: { id: 1 } }" custom v-slot="{ navigate }">
      <a-button @click="navigate" type="primary">Edit</a-button>
    </router-link>

    <router-link :to="{ name: 'AdminDetail', params: { id: 1 } }" custom v-slot="{ navigate }">
      <a-button @click="navigate" type="primary">Detail</a-button>
    </router-link>

    <router-link :to="{ name: 'FeatureCreate' }" custom v-slot="{ navigate }">
      <a-button @click="navigate" type="primary">Feature</a-button>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
