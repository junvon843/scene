<template>
  <section class="section-block">
    <div class="title-row-between">
      <h1>游记专区</h1>
      <el-radio-group v-model="layoutMode" size="small">
        <el-radio-button label="grid">网格</el-radio-button>
        <el-radio-button label="masonry">瀑布流</el-radio-button>
      </el-radio-group>
    </div>

    <div :class="layoutMode === 'grid' ? 'notes-grid' : 'notes-masonry'">
      <TravelNoteCard v-for="note in sortedNotes" :key="note.id" :note="note" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import TravelNoteCard from '../components/TravelNoteCard.vue'
import { travelNotes } from '../mock/data'

const layoutMode = ref('grid')
const sortedNotes = computed(() => [...travelNotes].sort((a, b) => b.views - a.views))
</script>
