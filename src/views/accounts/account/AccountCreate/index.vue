<template>
  <GenericStepCreatePage ref="genericStepCreatePage" v-bind="config" v-on="$listeners">
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
        steps: [
          {
            key: 0,
            name: 'step1',
            title: '账号种类',
            icon: '',
            component: Step1
          },
          {
            key: 5,
            name: 'step2',
            title: '账号类型',
            icon: '',
            component: Step2
          },
          {
            key: 7,
            name: 'step3',
            title: '账号信息',
            icon: '',
            component: Step3
          }
        ],
        onChange(prevIndex, nextIndex) {
          const nextStep = vm.config.steps[nextIndex]
          const prevStep = vm.config.steps[prevIndex]
          const prevFormValue = vm.$refs.genericStepCreatePage.$refs[prevStep.name][0].$children[0].$refs.form.$refs.dataForm.$refs.form.getFormValue()
          console.log('on change prevFormValue: ', prevFormValue)
          console.log('on change nextForm 1: ', vm.$refs.genericStepCreatePage.$refs[nextStep.name][0].$children[0].$attrs.fields)
          vm.$refs.genericStepCreatePage.$refs[nextStep.name][0].$children[0].$attrs.fields = ['username']
          console.log('on change nextForm 2: ', vm.$refs.genericStepCreatePage.$refs[nextStep.name][0].$children[0].$attrs.fields)
          nextStep.key++
        }
      }
    }
  }
}
</script>
