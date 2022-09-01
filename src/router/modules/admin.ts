export default [
  {
    path: '/admin',
    component: () => import('@/views/layouts/TheResource.vue'),
    children: [
      {
        path: '',
        name: 'Admin',
        component: () => import('@/views/pages/admin/AdminIndex.vue'),
        meta: {
          breadcrumb: [{ breadcrumbName: 'breadcrumb.admin' }],
          title: 'admin',
          requiresAuth: true,
          scrollTop: true,
        },
      },
      {
        path: '/admin/create',
        name: 'AdminCreate',
        component: () => import('@/views/pages/admin/AdminCreate.vue'),
        meta: {
          breadcrumb: [
            {
              breadcrumbName: 'breadcrumb.admin',
              routeName: 'Admin',
            },
            { breadcrumbName: 'breadcrumb.admin_create' },
          ],
          title: 'admin-create',
          requiresAuth: true,
          scrollTop: true,
        },
      },
      {
        path: '/admin/edit/:id',
        name: 'AdminEdit',
        component: () => import('@/views/pages/admin/AdminEdit.vue'),
        props: true,
        meta: {
          breadcrumb: [
            {
              breadcrumbName: 'breadcrumb.admin',
              routeName: 'Admin',
            },
            { breadcrumbName: 'breadcrumb.admin_edit' },
          ],
          title: 'admin-edit',
          requiresAuth: true,
          scrollTop: true,
        },
      },
      {
        path: '/admin/detail/:id',
        name: 'AdminDetail',
        component: () => import('@/views/pages/admin/AdminDetail.vue'),
        props: true,
        meta: {
          breadcrumb: [
            {
              breadcrumbName: 'breadcrumb.admin',
              routeName: 'Admin',
            },
            { breadcrumbName: 'breadcrumb.admin_detail' },
          ],
          title: 'admin-detail',
          requiresAuth: true,
          scrollTop: true,
        },
      },
    ],
  },
]
