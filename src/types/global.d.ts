declare global {
  const __DEV__: string
  interface Window {
    vox: { mathJax: (element: any, callback?: () => void) => void }
    webkit: any
  }
}

export {}
