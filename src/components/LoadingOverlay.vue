<template>
  <div class="loading-overlay" v-if="visible">
    <div class="loader"></div>
    <p>我知道你很急，但你先别急......</p>
  </div>
</template>

<script setup>
defineProps({
  visible: { type: Boolean, default: false }
})
</script>
