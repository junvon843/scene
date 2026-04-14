<template>
  <el-card class="scenic-card" shadow="never">
    <img :src="item.cover" :alt="item.title" class="cover" />
    <div class="content">
      <div class="title-row">
        <h3 v-html="highlightKeyword(item.title, keyword)"></h3>
        <el-tag size="small" effect="dark">{{ item.region }}</el-tag>
      </div>
      <p v-html="highlightKeyword(item.intro, keyword)"></p>
      <div class="tags">
        <el-tag v-for="tag in item.tags" :key="tag" size="small" round>{{ tag }}</el-tag>
      </div>
      <div class="actions">
        <el-button text type="primary" @click="$emit('view', item.id)">查看详情</el-button>
        <el-space>
          <el-button text @click="$emit('like', item.id)">
            <el-icon><Star /></el-icon>{{ likes }}
          </el-button>
          <el-button text @click="$emit('favorite', item.id)">
            <el-icon><CollectionTag /></el-icon>{{ isFavorite ? '已收藏' : '收藏' }}
          </el-button>
        </el-space>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { highlightKeyword } from '../utils/highlight'

defineProps({
  item: { type: Object, required: true },
  keyword: { type: String, default: '' },
  likes: { type: Number, required: true },
  isFavorite: { type: Boolean, default: false }
})

defineEmits(['view', 'like', 'favorite'])
</script>
