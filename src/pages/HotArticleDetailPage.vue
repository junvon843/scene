<template>
  <section v-if="article" class="section-block">
    <div class="note-hero">
      <img :src="article.cover" :alt="article.title" class="detail-cover" />
      <div class="note-hero-mask">
        <h1>{{ article.title }}</h1>
        <p>{{ article.subtitle }}</p>
        <el-space>
          <el-tag effect="dark">{{ article.region }}</el-tag>
          <el-tag type="warning" effect="dark">{{ article.readMinutes }} 分钟阅读</el-tag>
          <el-tag effect="dark">{{ article.publishAt }}</el-tag>
        </el-space>
      </div>
    </div>

    <article class="glass-panel rich-text">
      <h3>正文导语</h3>
      <p>{{ article.summary }}</p>
      <section v-for="section in article.sections" :key="section.heading" class="note-section">
        <h4>{{ section.heading }}</h4>
        <p>{{ section.text }}</p>
        <img :src="section.image" :alt="section.heading" />
      </section>
    </article>

    <div class="title-row-between" style="margin-top: 18px;">
      <el-button @click="router.push('/hot')">返回全部热门文章</el-button>
      <el-link type="primary" @click="router.push('/')">回到首页</el-link>
    </div>
  </section>
  <section v-else class="section-block">
    <el-result icon="warning" title="文章不存在" sub-title="该文章可能已下线，请返回热门文章列表。">
      <template #extra>
        <el-button type="primary" @click="router.push('/hot')">返回全部热门文章</el-button>
      </template>
    </el-result>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { hotArticles } from '../mock/hotdata'

const route = useRoute()
const router = useRouter()

const article = computed(() => hotArticles.find((item) => item.id === Number(route.params.id)))
</script>
