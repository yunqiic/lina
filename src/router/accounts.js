import i18n from '@/i18n/i18n'
import empty from '@/layout/empty'
export default [
  {
    path: 'accounts',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.PAMAccountList'),
      licenseRequired: false
    },
    children: [
      {
        path: '',
        name: 'PAMAccountList',
        component: () => import('@/views/accounts/account/AccountList'),
        meta: { title: i18n.t('route.PAMAccountList'), activeMenu: '/accounts/accounts' }
      },
      {
        path: 'create',
        name: 'PAMAccountCreate',
        component: () => import('@/views/accounts/account/AccountCreate/index'),
        meta: { title: i18n.t('route.PAMAccountCreate'), activeMenu: '/accounts/accounts' },
        hidden: true
      },
      {
        path: ':id',
        name: 'PAMAccountDetail',
        component: () => import('@/views/accounts/account/AccountDetail/index'),
        meta: { title: i18n.t('route.PAMAccountDetail'), activeMenu: '/accounts/accounts' },
        hidden: true
      },
      {
        path: ':id/update',
        name: 'PAMAccountUpdate',
        component: () => import('@/views/accounts/account/AccountUpdate'),
        meta: { title: i18n.t('route.PAMAccountUpdate'), activeMenu: '/accounts/accounts' },
        hidden: true
      }
    ]
  },
  {
    path: 'account-types',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.PAMAccountTypeList'),
      licenseRequired: false
    },
    children: [
      {
        path: '',
        name: 'PAMAccountTypeList',
        component: () => import('@/views/accounts/account-type/AccountTypeList'),
        meta: { title: i18n.t('route.PAMAccountTypeList'), activeMenu: '/accounts/account-types' }
      }
    ]
  },
  {
    path: 'safes',
    component: empty,
    redirect: '',
    meta: {
      title: i18n.t('route.PAMSafeList'),
      licenseRequired: false
    },
    children: [
      {
        path: '',
        name: 'PAMSafeList',
        component: () => import('@/views/accounts/safe/SafeList'),
        meta: { title: i18n.t('route.PAMSafeList'), activeMenu: '/accounts/safes' }
      }
    ]
  }
]
