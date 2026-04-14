import { computed, ref, watch } from 'vue'

const THEME_KEY = 'travel-theme-mode'
const isDark = ref(localStorage.getItem(THEME_KEY) === 'dark')

watch(
  isDark,
  (value) => {
    localStorage.setItem(THEME_KEY, value ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', value)
  },
  { immediate: true }
)

export function useTheme() {
  const label = computed(() => (isDark.value ? '深色模式' : '浅色模式'))
  const setTheme = (value) => {
    isDark.value = Boolean(value)
  }
  const toggleTheme = () => setTheme(!isDark.value)

  return {
    isDark,
    label,
    setTheme,
    toggleTheme
  }
}
