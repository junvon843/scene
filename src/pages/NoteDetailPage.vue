<template>
  <section v-if="note" class="section-block note-detail-page">
    <div class="note-hero">
      <img :src="note.cover" :alt="note.title" class="detail-cover" />
      <div class="note-hero-mask">
        <h1>{{ note.title }}</h1>
        <p>{{ note.excerpt }}</p>
        <el-space wrap>
          <el-tag type="primary" effect="dark">{{ note.location }}</el-tag>
          <el-tag type="warning" effect="dark">{{ note.readingMinutes }} 分钟阅读</el-tag>
          <el-tag effect="dark">{{ note.views.toLocaleString() }} 阅读</el-tag>
          <el-tag effect="dark">{{ note.publishAt }}</el-tag>
        </el-space>
      </div>
    </div>

    <article class="glass-panel rich-text">
      <h3>正文</h3>
      <p>
        这是一篇风屿那小子晚上做梦时喝酒喝多了神经兮兮写出的文章，
        按实际旅行节奏记录路线、拍摄方式、停留时段和补给建议。不过都没啥值得参考的只能说，纯属扯淡。
      </p>
      <p v-for="(paragraph, index) in note.longBody" :key="`p-${index}`">
        {{ paragraph }}
      </p>
      <section v-for="section in note.sections" :key="section.heading" class="note-section">
        <h4>{{ section.heading }}</h4>
        <p>{{ section.text }}</p>
        <img :src="section.image" :alt="section.heading" />
      </section>
    </article>

    <aside class="section-block" style="padding: 18px;">
      <h3>参考行程</h3>
      <ul class="detail-list">
        <li v-for="item in note.itinerary" :key="item">{{ item }}</li>
      </ul>
      <h3>预算参考</h3>
      <ul class="detail-list">
        <li v-for="item in note.budget" :key="item">{{ item }}</li>
      </ul>
      <h3>随身清单</h3>
      <el-space wrap>
        <el-tag v-for="item in note.gear" :key="item" round>{{ item }}</el-tag>
      </el-space>
    </aside>

    <div class="title-row-between">
      <h3>继续阅读</h3>
      <el-link type="primary" @click="goNotes">返回游记专区</el-link>
    </div>
    <div class="notes-grid">
      <TravelNoteCard v-for="item in relatedNotes" :key="item.id" :note="item" />
    </div>
  </section>
  <section v-else class="section-block">
    <el-result icon="warning" title="游记不存在或已失效" sub-title="可能是无效链接，返回游记专区继续浏览。">
      <template #extra>
        <el-space>
          <el-button type="primary" @click="goNotes">返回游记专区</el-button>
          <el-button @click="goHome">返回首页</el-button>
        </el-space>
      </template>
    </el-result>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TravelNoteCard from '../components/TravelNoteCard.vue'
import { travelNotes } from '../mock/data'

const route = useRoute()

const note = computed(() => travelNotes.find((item) => item.id === Number(route.params.id)))
const relatedNotes = computed(() => travelNotes.filter((item) => item.id !== Number(route.params.id)).slice(0, 3))

const goNotes = () => window.location.assign('/notes')
const goHome = () => window.location.assign('/')
</script>
