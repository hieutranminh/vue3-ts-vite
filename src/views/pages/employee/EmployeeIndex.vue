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
        Filter
      </a-button>

      <!--Create-->
      <a-button type="primary">
        <template #icon>
          <PlusOutlined />
        </template>
        Import
      </a-button>
    </a-space>
  </section>

  <!--SEARCH-->
  <section class="container">
    <VeeForm
      :initial-values="form"
      @submit="handleLogin"
      class="auth_container ant-form ant-form-vertical">
      <!--email-->
      <InputField
        name="email"
        rules="required|email|max:50"
        size="large"
        label="Email"
        :maxlength="50">
        <template v-slot:prefix>
          <UserOutlined />
        </template>
      </InputField>

      <!--Sign In-->
      <a-button
        class="sign-in"
        type="primary"
        html-type="submit"
        size="large"
        block>
        Submit
      </a-button>
    </VeeForm>
  </section>

  <!--TABLE-->
  <section class="container">Table</section>
</template>

<script setup lang="ts">
  import TheBreadcrumb from '@/views/layouts/TheBreadcrumb.vue'
  import { reactive } from 'vue'
  import InputField from '@/views/components/form/InputField.vue'

  const form = reactive({
    email: '',
  })
  const handleLogin = () => {
    console.log('login')
  }
</script>

<style lang="scss" scoped></style>
