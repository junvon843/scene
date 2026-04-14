<template>
  <section class="section-block">
    <div class="title-row-between">
      <div>
        <h1>热门景点深度文章</h1>
        <p>共 {{ hotArticles.length }} 篇，均为可点击完整图文内容。</p>
      </div>
      <el-button @click="router.push('/')">返回首页</el-button>
    </div>
    <div class="notes-grid">
      <HotArticleCard v-for="article in hotArticles" :key="article.id" :article="article" />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HotArticleCard from '../components/HotArticleCard.vue'
import { hotArticles } from '../mock/hotdata'

const router = useRouter()
</script>
