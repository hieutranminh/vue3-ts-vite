<template>
  <VeeField
    :name="name"
    :label="label"
    :rules="rules"
    v-slot="{ value, handleChange, errorMessage }">
    <a-form-item
      :label="label"
      :has-feedback="!!errorMessage"
      :help="errorMessage"
      :validate-status="errorMessage ? 'error' : undefined">
      <!--Field-->
      <a-select
        :value="value"
        :id="name"
        v-bind="$attrs"
        @update:value="handleChange" />
    </a-form-item>
  </VeeField>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  defineProps({
    name: { type: String, required: true },
    label: { type: String, default: '' },
    rules: { type: [String, Object], default: '' },
  })
</script>
