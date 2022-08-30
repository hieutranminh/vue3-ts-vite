import { createApp } from 'vue';
import App from './App.vue';
import { setupPinia } from '@/plugins/pinia';
import { setupRouter } from './router';
import { setupAntDesign } from '@/plugins/ant-design';
import { setupVeeValidate } from '@/plugins/vee-validate';
import { setupAntDesignIcon } from '@/plugins/ant-design-icon';
import { setupGlobalComponent } from '@/plugins/global-component';
import { setupI18n } from '@/plugins/i18n';

/* ============
 * CSS Default
 * ============
 */
import '@/assets/scss/main.scss';

const setupApp = async () => {
  const app = createApp(App);

  // Configure Pinia
  setupPinia(app);

  // Configure Router
  setupRouter(app);

  // Configure Ant Design
  setupAntDesign(app);

  // Configure Ant Design Icon
  setupAntDesignIcon(app);

  // Configure Vee Validate
  setupVeeValidate(app);

  // Configure Global Components ( create with prefix Base... )
  setupGlobalComponent(app);

  // Configure i18n
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app);

  app.mount('#app');
};
setupApp().then();
