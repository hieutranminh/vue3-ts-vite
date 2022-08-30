import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min, max, url } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import vi from '@vee-validate/i18n/dist/locale/vi.json';
import type { App } from 'vue';

// Define the rule
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('url', url);

configure({
  validateOnInput: true,
  generateMessage: localize({
    en,
    ja,
    vi,
  }),
});

export const setupVeeValidate = (app: App<Element>) => {
  app.component('VeeForm', Form);
  app.component('VeeField', Field);
  app.component('VeeErrorMessage', ErrorMessage);
};
