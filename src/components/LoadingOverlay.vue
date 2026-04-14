<template>
  <div class="loading-overlay" v-if="visible">
    <div class="loader"></div>
    <p>正在加载旅程灵感...</p>
  </div>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: false }
})
</script>
