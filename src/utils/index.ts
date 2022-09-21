export function getHost() {
  return __DEV__ ? '' : import.meta.env.VITE_CONTENT_DOMAIN + '/vue3-multipage'
}