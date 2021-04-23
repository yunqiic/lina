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
    const vm = this
    return {
      steps: [
        {
          key: Math.random(),
          tab: {
            title: '账号类别',
            icon: 'ti-user',
            beforeChange() {
              console.log('beforeChange ->>> step1', this)
              vm.steps[1].form.fields = ['username']
              vm.steps[1].key++
              console.log(vm.steps[1].key)
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
          key: Math.random(),
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
          key: Math.random(),
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
