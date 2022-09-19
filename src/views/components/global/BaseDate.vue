<template>
  <span v-text="formatDate" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import dayjs from 'dayjs'

  const props = defineProps({
    date: { type: [String, Date], required: true },
    format: { type: String, default: 'YYYY-MM-DD' },
  })
  const formatDate = computed((_) => {
    return dayjs(props.date).format(props.format)
  })
</script>

<style lang="scss" scoped></style>
