<template>
  <el-card class="note-card note-clickable" shadow="never" @click="goDetail">
    <img :src="note.cover" class="cover" :alt="note.title" />
    <h3>{{ note.title }}</h3>
    <p>{{ note.excerpt }}</p>
    <div class="meta">
      <span>{{ note.author }}</span>
      <span>{{ note.publishAt }}</span>
      <el-tag size="small" type="warning">{{ note.views.toLocaleString() }} 阅读</el-tag>
    </div>
  </el-card>
</template>

<script setup>
const props = defineProps({
  note: { type: Object, required: true }
})

const goDetail = () => {
  window.location.assign(`/notes/${props.note.id}`)
}
</script>
