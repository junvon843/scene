import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import ScenicListPage from '../pages/ScenicListPage.vue'
import ScenicDetailPage from '../pages/ScenicDetailPage.vue'
import NotesPage from '../pages/NotesPage.vue'
import NoteDetailPage from '../pages/NoteDetailPage.vue'
import HotArticleListPage from '../pages/HotArticleListPage.vue'
import HotArticleDetailPage from '../pages/HotArticleDetailPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/scenic', name: 'scenic', component: ScenicListPage },
    { path: '/scenic/:id', name: 'scenic-detail', component: ScenicDetailPage, props: true },
    { path: '/hot', name: 'hot-articles', component: HotArticleListPage },
    { path: '/hot/:id', name: 'hot-article-detail', component: HotArticleDetailPage, props: true },
    { path: '/hot:legacyId(\\d+)', redirect: (to) => `/hot/${to.params.legacyId}` },
    { path: '/notes', name: 'notes', component: NotesPage },
    { path: '/notes/:id', name: 'note-detail', component: NoteDetailPage, props: true },
    { path: '/note:legacyId(\\d+)', redirect: (to) => `/notes/${to.params.legacyId}` },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

export default router
