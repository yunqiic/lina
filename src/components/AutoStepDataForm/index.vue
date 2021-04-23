<template>
  <StepDataForm ref="stepDataForm" :steps="iSteps" />
</template>

<script>
import StepDataForm from '../StepDataForm'
import { FormFieldGenerator } from '@/components/AutoDataForm/utils'
export default {
  name: 'AutoStepDataForm',
  components: {
    StepDataForm
  },
  props: {
    steps: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      loading: true,
      iSteps: this.steps
    }
  },
  mounted() {
    this.optionUrlMetaAndGenerateStepsColumns()
  },
  methods: {
    optionUrlMetaAndGenerateStepsColumns() {
      for (const step of this.iSteps) {
        this.optionUrlMetaAndGenerateStepColumns(step)
      }
    },
    optionUrlMetaAndGenerateStepColumns(step) {
      this.$store.dispatch('common/getUrlMeta', { url: step.form.url }).then(data => {
        step.form.remoteMeta = data.actions[step.form.method.toUpperCase()] || {}
        const generator = new FormFieldGenerator()
        step.form.totalFields = generator.generateFields(step.form.fields, step.form.fieldsMeta, step.form.remoteMeta)
        step.form.groups = generator.groups
        this.cleanStepFormValue(step)
      }).catch(err => {
        this.$log.error(err)
      }).finally(() => {
        step.form.loading = false
      })
    },
    cleanStepFormValue(step) {
      this._cleanStepFormValue(step.form.form, step.form.remoteMeta)
    },
    _cleanStepFormValue(form, remoteMeta) {
      for (const [k, v] of Object.entries(remoteMeta)) {
        if (v.default === undefined) {
          continue
        }
        const valueSet = form[k]
        if (valueSet !== undefined) {
          continue
        }
        if (v.type === 'nested object' && typeof valueSet === 'object') {
          this._cleanStepFormValue(valueSet, v.children)
        }
        form[k] = v.default
      }
    }
  }
}
</script>

<style scoped>

</style>
