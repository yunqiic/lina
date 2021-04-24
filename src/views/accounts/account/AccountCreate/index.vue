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
      form: {
      },
      config: {
        category: '',
        accountType: '',
        steps: [
          {
            key: 0,
            name: 'step1',
            title: '账号种类',
            icon: '',
            component: Step1,
            beforeChange() {
              const form = this.$children[0].getFormValue()
              const category = form.category
              const query = Object.assign({}, vm.$route.query, { category: category })
              vm.$router.replace({ query })
              return true
            }
          },
          {
            key: 1,
            name: 'step2',
            title: '账号类型',
            icon: '',
            component: Step2,
            async beforeChange() {
              const form = this.$children[0]
              if (!await form.validate()) {
                return false
              }
              const formValue = form.getFormValue()
              console.log('step2 form: ', formValue.type)
              const accountType = formValue.type
              const query = Object.assign({}, vm.$route.query, { account_type: accountType })
              vm.$router.replace({ query })
              return true
            }
          },
          {
            key: 2,
            name: 'step3',
            title: '账号信息',
            icon: '',
            component: Step3
          }
        ],
        onChange(prevIndex, nextIndex) {
          vm.$log.debug(prevIndex, nextIndex)
          const nextStep = vm.config.steps[nextIndex]
          const query = vm.$route.query
          if (nextStep.name === 'step2' && query.category !== vm.category) {
            vm.$log.debug('Change Key')
            vm.category = query.category
            nextStep.key = Math.random()
          } else if (nextStep.name === 'step3' && query.account_type !== vm.accountType) {
            vm.accountType = query.account_type
            nextStep.key = Math.random()
          }
        }
      }
    }
  }
}
</script>
