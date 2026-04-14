const REGEX_ESCAPE = /[.*+?^${}()|[\]\\]/g

export function highlightKeyword(text, keyword) {
  if (!keyword) return text
  const safeKeyword = keyword.replace(REGEX_ESCAPE, '\\$&')
  const regex = new RegExp(`(${safeKeyword})`, 'ig')
  return String(text).replace(regex, '<mark class="keyword-mark">$1</mark>')
}
