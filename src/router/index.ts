import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Modules
import AuthRoute from './modules/auth';
import EmployeeRoute from './modules/employee';
import AdminRoute from './modules/admin';
import ErrorRoute from './modules/errors';

const routes: RouteRecordRaw[] = [
  // Auth
  {
    path: '/auth',
    name: 'Auth',
    redirect: 'Login',
    component: () => import('@/views/pages/AuthView.vue'),
    children: [...AuthRoute],
  },

  // Main
  {
    path: '/',
    name: 'Index',
    redirect: { name: 'Employee' },
    component: () => import('@/views/pages/IndexView.vue'),
    children: [...EmployeeRoute, ...AdminRoute, ...ErrorRoute],
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    return to.meta.scrollTop ? { top: 0, behavior: 'smooth' } : {};
  },
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
