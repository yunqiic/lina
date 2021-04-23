<template>
  <StepDataForm ref="stepDataForm" v-loading="loading" :total-fields="totalFields" :groups="groups" :form="iForm" v-bind="$attrs" v-on="$listeners" />
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
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: 'post'
    },
    fields: {
      type: Array,
      default: () => {
        return []
      }
    },
    form: {
      type: Object,
      default: () => ({})
    },
    fieldsMeta: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      remoteMeta: {},
      totalFields: [],
      loading: true,
      groups: [],
      iForm: this.form
    }
  },
  mounted() {
    this.optionUrlMetaAndGenerateStepFormColumns()
  },
  methods: {
    optionUrlMetaAndGenerateStepFormColumns() {
      this.$store.dispatch('common/getUrlMeta', { url: this.url }).then(data => {
        this.remoteMeta = data.actions[this.method.toUpperCase()] || {}
        const generator = new FormFieldGenerator()
        this.totalFields = generator.generateFields(this.fields, this.fieldsMeta, this.remoteMeta)
        this.groups = generator.groups
        this.cleanStepFormValue()
      }).catch(err => {
        this.$log.error(err)
      }).finally(() => {
        this.loading = false
      })
    },
    cleanStepFormValue() {
      this._cleanStepFormValue(this.iForm, this.remoteMeta)
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
