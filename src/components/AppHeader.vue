<template>
  <header class="app-header glass-panel">
    <div class="brand" @click="safePush('/')">
      <el-icon><Compass /></el-icon>
      <strong>FRO LUXE TRAVEL</strong>
    </div>

    <el-menu :default-active="activePath" mode="horizontal" class="nav-menu" @select="onSelect">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/scenic">景点探索</el-menu-item>
      <el-menu-item index="/notes">游记专区</el-menu-item>
    </el-menu>

    <div class="actions">
      <el-switch
        :model-value="theme.isDark"
        inline-prompt
        active-text="暗"
        inactive-text="亮"
        @change="theme.setTheme"
      />
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const route = useRoute()
const theme = useTheme()

const activePath = computed(() => route.path === '/' ? '/' : `/${route.path.split('/')[1]}`)

const safePush = (path) => {
  if (window.location.pathname === path) return
  // 顶部主导航采用硬跳转，彻底规避 SPA 状态不同步导致的“URL变了但页面不变”
  window.location.assign(path)
}

const onSelect = (index) => safePush(index)
</script>
