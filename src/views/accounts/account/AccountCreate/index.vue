<template>
  <GenericStepCreatePage v-bind="config" v-on="$listeners">
    <Step1 v-if="false" />
    <Step2 v-if="false" />
    <Step3 v-if="false" />
  </GenericStepCreatePage>
</template>

<script>
import GenericStepCreatePage from '@/layout/components/GenericStepCreatePage'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'

export default {
  name: 'AccountCreate',
  components: {
    GenericStepCreatePage,
    Step1, Step2, Step3
  },
  data() {
    const vm = this
    return {
      config: {
        formValue: {},
        category: '',
        accountType: '',
        steps: [
          {
            key: 0,
            name: 'step1',
            title: this.$t('accounts.AccountCategory'),
            icon: '',
            component: Step1,
            async beforeChange() {
              const elForm = this.$children[0].form.elForm
              const formValue = elForm.getFormValue()
              const category = formValue.category
              const query = Object.assign({}, vm.$route.query, { category: category })
              console.log('query: ', query)
              await vm.$router.replace({ query })
              return true
            }
          },
          {
            key: 1,
            name: 'step2',
            title: this.$t('accounts.AccountType'),
            icon: '',
            component: Step2,
            async beforeChange() {
              const elForm = this.$children[0].form.elForm
              if (!await elForm.validate()) {
                return false
              }
              const formValue = elForm.getFormValue()
              const accountType = formValue.type
              const query = Object.assign({}, vm.$route.query, { account_type: accountType })
              await vm.$router.replace({ query })
              Object.assign(vm.config.formValue, formValue)
              return true
            }
          },
          {
            key: 2,
            name: 'step3',
            title: this.$t('accounts.AccountInfo'),
            icon: '',
            component: Step3,
            async beforeChange() {
              const form = this.$children[0].form
              const elForm = form.elForm
              const dataForm = form.dataForm
              const formValue = elForm.getFormValue()
              await Object.assign(vm.config.formValue, formValue)
              dataForm.submitForm('form')
              return true
            }
          }
        ],
        onChange(prevIndex, nextIndex) {
          if (nextIndex === -1) {
            return
          }
          const nextStep = vm.config.steps[nextIndex]
          const query = vm.$route.query
          if (nextStep.name === 'step2' && query.category !== vm.category) {
            vm.category = query.category
            nextStep.key = Math.random()
          } else if (nextStep.name === 'step3' && query.account_type !== vm.accountType) {
            vm.accountType = query.account_type
            nextStep.key = Math.random()
          }
        }
      }
    }
  },
  methods: {

  }
}
</script>
