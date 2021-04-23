<template>
  <GenericStepCreatePage :steps="steps" />
</template>

<script>
import GenericStepCreatePage from '@/layout/components/GenericStepCreatePage'

export default {
  name: 'AccountCreate',
  components: {
    GenericStepCreatePage
  },
  data() {
    return {
      steps: [
        {
          route: '',
          tab: {
            title: '账号类别',
            icon: 'ti-user',
            beforeChange() {
              console.log('beforeChange ->>> step1', this)
              return true
            }
          },
          form: {
            loading: true,
            method: 'post',
            url: '/api/v1/accounts/account-types/',
            name: 'stepOne',
            fields: ['category'],
            fieldsMeta: {},
            form: {}
          }
        },
        {
          tab: {
            title: '账号类型',
            icon: 'ti-check',
            beforeChange() {
              console.log('beforeChange ->>> step2')
              return true
            }
          },
          form: {
            loading: true,
            method: 'post',
            url: '/api/v1/accounts/accounts/',
            name: 'stepTwo',
            fields: ['type'],
            fieldsMeta: {},
            form: {}
          }
        },
        {
          tab: {
            title: '账号信息',
            icon: 'ti-settings',
            beforeChange() {
              console.log('beforeChange ->>> step3')
              return true
            }
          },
          form: {
            loading: true,
            method: 'post',
            url: '/api/v1/accounts/accounts/',
            name: 'stepThree',
            fields: [
              [this.$t('common.Basic'), ['username', 'address', 'secret', 'attrs']],
              [this.$t('common.Other'), ['comment']]
            ],
            fieldsMeta: {},
            form: {}
          }
        }
      ]
    }
  }
}
</script>
