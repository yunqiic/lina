import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'
export default [
  {
    path: 'accounts',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.UserList') },
    children: [
    {
        path: '',
        component: () => import('@/views/accounts/Account/AccountList'), // Parent router-view
        name: 'AccountList',
        meta: { title: i18n.t('route.AccountList') },
    },
    {
    path: 'create',
    component: () => import('@/views/accounts/Account/AccountCreateUpdate'), // Parent router-view
    name: 'AccountCreate',
    hidden: true,
    meta: { title: i18n.t('route.AccountCreate'), activeMenu: '/accounts/accounts', action: 'create' }
  },
      {
    path: ':id/update',
    component: () => import('@/views/users/User/UserCreateUpdate.vue'), // Parent router-view
    name: 'UserUpdate',
    hidden: true,
    meta: { title: i18n.t('route.UserUpdate'), activeMenu: '/users/users', action: 'update' }
  },
  {
    path: ':id',
    component: () => import('@/views/users/User/UserDetail/index.vue'), // Parent router-view
    name: 'UserDetail',
    hidden: true,
    meta: { title: i18n.t('route.UserDetail'), activeMenu: '/users/users' }
  },
    ]
  },
  {
    path: 'account-types',
    component: empty, // Parent router-view
    redirect: '',
    meta: { title: i18n.t('route.AccountTypeList') },
    children: [
    {
        path: '',
        component: () => import('@/views/accounts/AccountType/AccountTypeList'), // Parent router-view
        name: 'AccountTypeList',
        meta: { title: i18n.t('route.AccountTypeList') },
    },
    {
    path: 'create',
    component: () => import('@/views/accounts/Account/AccountCreateUpdate'), // Parent router-view
    name: 'AccountCreate',
    hidden: true,
    meta: { title: i18n.t('route.AccountCreate'), activeMenu: '/accounts/accounts', action: 'create' }
  },
      {
    path: ':id/update',
    component: () => import('@/views/users/User/UserCreateUpdate.vue'), // Parent router-view
    name: 'UserUpdate',
    hidden: true,
    meta: { title: i18n.t('route.UserUpdate'), activeMenu: '/users/users', action: 'update' }
  },
  {
    path: ':id',
    component: () => import('@/views/users/User/UserDetail/index.vue'), // Parent router-view
    name: 'AccountTypeDetail',
    hidden: true,
    meta: { title: i18n.t('route.UserDetail'), activeMenu: '/users/users' }
  },
    ]
  }

]
