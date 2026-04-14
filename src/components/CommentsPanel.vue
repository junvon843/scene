<template>
  <div class="comments-panel glass-panel">
    <h3>旅行评论</h3>
    <el-form @submit.prevent>
      <el-input v-model="form.name" placeholder="昵称" maxlength="12" />
      <el-input
        v-model="form.content"
        type="textarea"
        :rows="3"
        maxlength="120"
        show-word-limit
        placeholder="分享你的旅行感受..."
      />
      <el-button type="primary" @click="submitComment">发布评论</el-button>
    </el-form>

    <el-empty v-if="comments.length === 0" description="还没有评论，快来抢沙发" />
    <div v-else class="comment-list">
      <article v-for="item in comments" :key="item.id" class="comment-item">
        <strong>{{ item.name }}</strong>
        <span>{{ item.time }}</span>
        <p>{{ item.content }}</p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  scenicId: { type: Number, required: true }
})

const storageKey = `travel-comments-${props.scenicId}`
const comments = ref(JSON.parse(localStorage.getItem(storageKey) || '[]'))

const form = reactive({ name: '', content: '' })

const submitComment = () => {
  if (!form.name.trim() || !form.content.trim()) {
    ElMessage.warning('请先填写昵称和评论内容')
    return
  }

  const item = {
    id: Date.now(),
    name: form.name.trim(),
    content: form.content.trim(),
    time: new Date().toLocaleString('zh-CN', { hour12: false })
  }

  comments.value.unshift(item)
  localStorage.setItem(storageKey, JSON.stringify(comments.value))
  form.name = ''
  form.content = ''
  ElMessage.success('评论发布成功')
}
</script>
