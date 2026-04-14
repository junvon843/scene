<template>
  <div class="app-shell">
    <AppHeader />
    <LoadingOverlay :visible="isLoading" />

    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>

    <AppFooter />
    <BackToTop />
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BackToTop from './components/BackToTop.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'

const isLoading = ref(false)
const router = useRouter()
let closeTimer = null

const removeBefore = router.beforeEach(() => {
  clearTimeout(closeTimer)
  isLoading.value = true
})

const removeAfter = router.afterEach(() => {
  clearTimeout(closeTimer)
  closeTimer = setTimeout(() => {
    isLoading.value = false
  }, 180)
})

const removeError = router.onError(() => {
  clearTimeout(closeTimer)
  isLoading.value = false
})

onBeforeUnmount(() => {
  removeBefore()
  removeAfter()
  removeError()
  clearTimeout(closeTimer)
})
</script>
