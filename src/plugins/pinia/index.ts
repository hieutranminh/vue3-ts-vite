import type { App } from 'vue'
import { createPinia } from 'pinia'

export const setupPinia = (app: App<Element>) => {
  app.use(createPinia())
}
