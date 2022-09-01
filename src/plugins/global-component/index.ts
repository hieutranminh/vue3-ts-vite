import type { App } from 'vue'

export const setupGlobalComponent = (app: App<Element>) => {
  const components = import.meta.glob('@/views/components/global/*.vue', {
    eager: true,
  })

  Object.entries(components).forEach(([path, definition]: any[] | string) => {
    // Get name of component, based on filename
    const componentName = path
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    // Register component on this Vue instance
    app.component(componentName, definition.default)
  })
}
