<template>
  <a-layout-header class="layout-header">
    <div class="header-left">
      <div @click="$emit('collapsed', !collapsed)" class="menu-toggle">
        <menu-unfold-outlined v-if="collapsed" class="trigger" />
        <menu-fold-outlined v-else class="trigger" />
      </div>

      <!--Locale switch-->
      <LocaleSwitcher />
    </div>

    <div class="header-right">
      <!--Dropdown optional-->
      <a-dropdown :trigger="['click']" placement="bottomRight">
        <div>
          <span class="name">Hugh Jackman</span>
          <a-avatar
            class="ant-dropdown-link"
            src="@/assets/images.img-default.jpg"
            :size="32" />
        </div>

        <template #overlay>
          <a-menu>
            <a-menu-item key="0" @click.prevent="handleLogout">
              <LogoutOutlined />
              Logout
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
  import LocaleSwitcher from '@/views/components/LocaleSwitcher.vue'

  defineProps({ collapsed: Boolean })

  const handleLogout = () => {
    console.log('Logout')
  }
</script>

<style lang="scss" scoped>
  .layout-header {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0 0;
    line-height: unset;
    .header-left {
      display: flex;
      align-items: center;
      height: 100%;
      .menu-toggle {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 100%;
        padding: 0 24px;
        font-size: 16px;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
      .name {
        display: inline-block;
        font-size: 12px;
        margin-right: 10px;
        font-weight: 600;
      }
    }
  }
</style>
