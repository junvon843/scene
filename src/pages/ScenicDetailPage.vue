<template>
  <section v-if="scenic" class="section-block scenic-detail-page">
    <el-carousel height="420px" indicator-position="outside" class="detail-carousel">
      <el-carousel-item v-for="image in scenic.gallery" :key="image">
        <img :src="image" class="detail-cover" :alt="scenic.title" />
      </el-carousel-item>
    </el-carousel>

    <div class="title-row-between">
      <div>
        <h1>{{ scenic.title }}</h1>
        <p>{{ scenic.intro }}</p>
      </div>
      <el-space>
        <el-button type="warning" @click="toggleLike">
          <el-icon><Star /></el-icon>{{ likeCount }}
        </el-button>
        <el-button @click="toggleFavorite">{{ favorite ? '取消收藏' : '收藏景点' }}</el-button>
      </el-space>
    </div>

    <el-row :gutter="18">
      <el-col :md="16" :xs="24">
        <article class="glass-panel rich-text">
          <h3>景点介绍</h3>
          <p>{{ scenic.content }}</p>
          <div v-for="section in scenic.noteSections" :key="section.title" class="note-section">
            <h4>{{ section.title }}</h4>
            <p>{{ section.text }}</p>
            <img :src="section.image" :alt="section.title" />
          </div>
        </article>
      </el-col>
      <el-col :md="8" :xs="24">
        <aside class="glass-panel guide-panel">
          <h3>游玩攻略</h3>
          <p><strong>开放时间：</strong>{{ scenic.openTime }}</p>
          <p><strong>门票信息：</strong>{{ scenic.ticket }}</p>
          <el-divider />
          <h4>出行贴士</h4>
          <ul>
            <li v-for="tip in scenic.tips" :key="tip">{{ tip }}</li>
          </ul>
        </aside>
      </el-col>
    </el-row>

    <CommentsPanel :scenic-id="scenic.id" />

    <div class="section-block" style="padding: 0; margin-top: 24px;">
      <div class="title-row-between">
        <h2>相关景点推荐</h2>
        <el-link type="primary" @click="goScenic">查看更多</el-link>
      </div>
      <div class="scenic-grid">
        <ScenicCard
          v-for="item in related"
          :key="item.id"
          :item="item"
          :likes="item.baseLikes"
          @view="goDetail"
          @like="noop"
          @favorite="noop"
        />
      </div>
    </div>
  </section>
  <section v-else class="section-block">
    <el-result icon="warning" title="景点不存在或已失效" sub-title="当前景点链接无效，请返回景点列表重试。">
      <template #extra>
        <el-space>
          <el-button type="primary" @click="goScenic">返回景点列表</el-button>
          <el-button @click="goHome">返回首页</el-button>
        </el-space>
      </template>
    </el-result>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import ScenicCard from '../components/ScenicCard.vue'
import CommentsPanel from '../components/CommentsPanel.vue'
import { scenicSpots } from '../mock/data'
import { useLocalEngagement } from '../composables/useLocalEngagement'

const route = useRoute()
const scenic = computed(() => scenicSpots.find((item) => item.id === Number(route.params.id)))
const related = computed(() => scenicSpots.filter((item) => scenic.value && item.type === scenic.value.type && item.id !== scenic.value.id).slice(0, 3))

const currentState = computed(() => scenic.value ? useLocalEngagement(scenic.value.id, scenic.value.baseLikes) : null)

const likeCount = computed(() => currentState.value?.likeCount.value ?? 0)
const favorite = computed(() => currentState.value?.favorite.value ?? false)

const toggleLike = () => {
  if (!currentState.value) return
  currentState.value.toggleLike()
  ElMessage.success('点赞状态已更新')
}

const toggleFavorite = () => {
  if (!currentState.value) return
  currentState.value.toggleFavorite()
  ElMessage.success(currentState.value.favorite.value ? '已加入收藏' : '已取消收藏')
}

const goDetail = (id) => window.location.assign(`/scenic/${id}`)
const goScenic = () => window.location.assign('/scenic')
const goHome = () => window.location.assign('/')
const noop = () => {}
</script>
