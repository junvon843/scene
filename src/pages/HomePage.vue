<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroImages[currentHero]})` }">
    <div class="hero-mask">
      <h1>探索世界的奢华角度</h1>
      <p>沉浸式景点、图文游记与高质感旅行攻略，开启你的下一段灵感旅程。</p>
      <div class="hero-actions">
        <el-button type="warning" size="large" @click="goHot">阅读热门图文</el-button>
        <el-button plain size="large" @click="goNotes">进入游记专区</el-button>
      </div>
    </div>
  </section>

  <section class="section-block">
    <div class="title-row-between">
      <h2>热门景点推荐</h2>
      <el-link type="primary" @click="goHot">查看全部</el-link>
    </div>
    <div class="notes-grid">
      <HotArticleCard
        v-for="item in featuredHotArticles"
        :key="item.id"
        :article="item"
      />
    </div>
  </section>

  <section class="section-block">
    <div class="title-row-between">
      <h2>精选游记</h2>
      <el-link type="primary" @click="goNotes">进入游记专区</el-link>
    </div>
    <div class="notes-grid">
      <TravelNoteCard v-for="note in featuredNotes" :key="note.id" :note="note" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import TravelNoteCard from '../components/TravelNoteCard.vue'
import HotArticleCard from '../components/HotArticleCard.vue'
import { scenicSpots, travelNotes } from '../mock/data'
import { hotArticles } from '../mock/hotdata'

const currentHero = ref(0)
const heroImages = scenicSpots.slice(0, 3).map((item) => item.cover)

const featuredHotArticles = computed(() => hotArticles.slice(0, 5))
const featuredNotes = computed(() => [...travelNotes].sort((a, b) => b.views - a.views).slice(0, 3))

const goHot = () => {
  window.location.assign('/hot')
}
const goNotes = () => {
  window.location.assign('/notes')
}

let timer = null
onMounted(() => {
  timer = setInterval(() => {
    currentHero.value = (currentHero.value + 1) % heroImages.length
  }, 4500)
})

onUnmounted(() => clearInterval(timer))
</script>
