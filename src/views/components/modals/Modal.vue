<template>
  <a-modal
    :visible="visible"
    @click="$emit('cancel')">
    <template #title>
      <slot name="title">Basic Modal</slot>
    </template>

    <slot>Some contents...</slot>

    <template #footer>
      <slot name="footer">
        <a-button
          key="back"
          @click="$emit('cancel')">
          {{ $t('btn.cancel') }}
        </a-button>

        <a-button
          key="submit"
          type="primary"
          @click="$emit('ok')">
          {{ $t('btn.ok') }}
        </a-button>
      </slot>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
  defineProps({
    visible: { type: Boolean, default: false },
  })
</script>

<style scoped></style>
