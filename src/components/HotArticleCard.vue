<template>
  <el-card class="hot-card note-clickable" shadow="never" @click="goDetail">
    <img :src="article.cover" :alt="article.title" class="cover" />
    <div class="content">
      <div class="title-row">
        <h3>{{ article.title }}</h3>
        <el-tag size="small" effect="dark">{{ article.region }}</el-tag>
      </div>
      <p>{{ article.summary }}</p>
      <div class="meta">
        <span>{{ article.publishAt }}</span>
        <span>{{ article.readMinutes }} 分钟阅读</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  article: { type: Object, required: true }
})

const goDetail = () => {
  window.location.assign(`/hot/${props.article.id}`)
}
</script>
