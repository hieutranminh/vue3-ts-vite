<template>
  <div class="logo" />

  <a-menu
    theme="dark"
    mode="inline">
    <a-menu-item key="1">
      <user-outlined />
      <span class="nav-text">nav 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <user-outlined />
      <span class="nav-text">nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <user-outlined />
      <span class="nav-text">nav 3</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <user-outlined />
      </template>
      <template #title>Navigation One</template>
      <a-menu-item key="5">Option 5</a-menu-item>
      <a-menu-item key="6">Option 6</a-menu-item>
      <a-menu-item key="7">Option 7</a-menu-item>
      <a-menu-item key="8">Option 8</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
</style>
