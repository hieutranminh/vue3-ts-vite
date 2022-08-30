export default [
  {
    path: '/500',
    name: 'Error500',
    component: () => import('@/views/pages/errors/ErrorPage500.vue'),
  },
  {
    path: '/404',
    name: 'Error404',
    component: () => import('@/views/pages/errors/ErrorPage404.vue'),
  },
  {
    path: '/403',
    name: 'Error403',
    component: () => import('@/views/pages/errors/ErrorPage403.vue'),
  },
  // NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/pages/NotFound.vue'),
    meta: {
      breadcrumb: [{ breadcrumbName: 'breadcrumb.notfound' }],
    },
  },
];
