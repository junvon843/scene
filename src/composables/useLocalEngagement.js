import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'travel-engagement-v1'

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

const state = ref(loadState())

watch(
  state,
  (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
  { deep: true }
)

export function useLocalEngagement(id, baseLikes = 0) {
  const key = String(id)

  const itemState = computed(() => state.value[key] || { liked: false, favorite: false })

  const liked = computed(() => itemState.value.liked)
  const favorite = computed(() => itemState.value.favorite)
  const likeCount = computed(() => baseLikes + (liked.value ? 1 : 0))

  const toggleLike = () => {
    state.value[key] = { ...itemState.value, liked: !itemState.value.liked }
  }

  const toggleFavorite = () => {
    state.value[key] = { ...itemState.value, favorite: !itemState.value.favorite }
  }

  return { liked, favorite, likeCount, toggleLike, toggleFavorite }
}

export function useFavoriteIds() {
  return computed(() =>
    Object.entries(state.value)
      .filter(([, value]) => value.favorite)
      .map(([id]) => Number(id))
  )
}
