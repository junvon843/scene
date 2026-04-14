<template>
  <section class="section-block scenic-list-page">
    <div class="title-row-between">
      <h1>景点探索</h1>
      <el-input v-model="filters.keyword" placeholder="搜索景点标题或简介" clearable style="max-width: 280px" />
    </div>

    <div class="filters glass-panel">
      <el-select v-model="filters.region" placeholder="地域" clearable>
        <el-option v-for="item in regions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="filters.type" placeholder="景点类型" clearable>
        <el-option v-for="item in scenicCategories" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="filters.season" placeholder="游玩季节" clearable>
        <el-option v-for="item in seasons" :key="item" :label="item" :value="item" />
      </el-select>
      <el-select v-model="filters.sort" placeholder="排序方式">
        <el-option label="热度优先" value="hot" />
        <el-option label="名称 A-Z" value="name" />
      </el-select>
      <el-switch v-model="onlyFavorite" inline-prompt active-text="收藏" inactive-text="全部" />
    </div>

    <div class="scenic-grid">
      <ScenicCard
        v-for="item in pagedData"
        :key="item.id"
        :item="item"
        :keyword="filters.keyword"
        :likes="likeMap[item.id].likeCount.value"
        :is-favorite="likeMap[item.id].favorite.value"
        @view="goDetail"
        @like="onLike"
        @favorite="onFavorite"
      />
    </div>

    <el-empty v-if="pagedData.length === 0" description="没有匹配到景点，试试更换筛选条件" />

    <div class="pager-wrap">
      <el-pagination
        v-model:current-page="page"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="filteredData.length"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import ScenicCard from '../components/ScenicCard.vue'
import { regions, scenicCategories, scenicSpots, seasons } from '../mock/data'
import { useFavoriteIds, useLocalEngagement } from '../composables/useLocalEngagement'

const route = useRoute()
const router = useRouter()

const filters = reactive({
  keyword: route.query.q || '',
  region: route.query.region || '',
  type: route.query.type || '',
  season: route.query.season || '',
  sort: 'hot'
})

const onlyFavorite = ref(false)
const page = ref(1)
const pageSize = 6
const favoriteIds = useFavoriteIds()

const likeMap = Object.fromEntries(
  scenicSpots.map((item) => [item.id, useLocalEngagement(item.id, item.baseLikes)])
)

const filteredData = computed(() => {
  let list = scenicSpots.filter((item) => {
    const matchKeyword = !filters.keyword || `${item.title}${item.intro}`.toLowerCase().includes(filters.keyword.toLowerCase())
    const matchRegion = !filters.region || item.region === filters.region
    const matchType = !filters.type || item.type === filters.type
    const matchSeason = !filters.season || item.season === filters.season
    const matchFavorite = !onlyFavorite.value || favoriteIds.value.includes(item.id)
    return matchKeyword && matchRegion && matchType && matchSeason && matchFavorite
  })

  if (filters.sort === 'name') {
    list = [...list].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'))
  } else {
    list = [...list].sort((a, b) => likeMap[b.id].likeCount.value - likeMap[a.id].likeCount.value)
  }

  return list
})

const pagedData = computed(() => {
  const start = (page.value - 1) * pageSize
  return filteredData.value.slice(start, start + pageSize)
})

watch([() => filters.keyword, () => filters.region, () => filters.type, () => filters.season, onlyFavorite], () => {
  page.value = 1
})

const goDetail = (id) => router.push(`/scenic/${id}`)
const onLike = (id) => {
  likeMap[id].toggleLike()
  ElMessage.success('点赞状态已更新')
}
const onFavorite = (id) => {
  likeMap[id].toggleFavorite()
  ElMessage.success(likeMap[id].favorite.value ? '已加入收藏' : '已取消收藏')
}
</script>
