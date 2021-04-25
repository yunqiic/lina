<template>
  <GenericStepCreateForm ref="genericStepCreateForm" :url="iUrl" :method="method" :fields="fields" :fields-meta="iFieldsMeta" :handle-submit="handleSubmit" />
</template>
<script>
import GenericStepCreateForm from '@/layout/components/GenericStepCreateForm'
import { Required } from '@/components/DataForm/rules'

export default {
  name: 'Step3',
  components: {
    GenericStepCreateForm
  },
  props: {
    formValue: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      method: 'post',
      fields: [
        [this.$t('common.Basic'), ['name', 'safe', 'is_privileged']],
        [this.$t('common.Auth'), ['address', 'username', 'secret']],
        [this.$t('common.Addition'), ['attrs']],
        [this.$t('common.Other'), ['comment']]
      ],
      fieldsMeta: {
        safe: {
          rules: [Required],
          el: {
            multiple: false,
            ajax: {
              url: `/api/v1/accounts/safes/`
            }
          }
        },
        attrs: {
          fields: []
        }
      }
    }
  },
  computed: {
    iUrl() {
      return this.getUrl()
    },
    iFieldsMeta() {
      return this.getFieldsMeta()
    },
    form() {
      return this.$refs.genericStepCreateForm
    }
  },
  mounted() {
  },
  methods: {
    getUrl() {
      this.$log.debug('account_type: ', this.$route)
      return `/api/v1/accounts/accounts/?account_type=${this.$route.query.account_type || ''}`
    },
    getFieldsMeta() {
      this.$store.dispatch('common/getUrlMeta', { url: this.iUrl }).then(data => {
        const remoteMeta = data.actions[this.method.toUpperCase()] || {}
        const attrs = remoteMeta.attrs.children || {}
        const attrsMetaFields = []
        // eslint-disable-next-line no-unused-vars
        for (const fieldName in attrs) {
          const fieldAttr = attrs[fieldName]
          if (!fieldAttr.read_only) {
            attrsMetaFields.push(fieldName)
          }
        }
        this.fieldsMeta.attrs.fields = attrsMetaFields
        if (attrsMetaFields.length === 0) {
          this.fields.splice(2, 1)
        }
      }).catch(err => {
        this.$log.error(err)
      })
      return this.fieldsMeta
    },
    handleSubmit(values, formName) {
      this.onSubmit(this.formValue)
    },
    onSubmit(validValues, formName) {
      this.performSubmit(validValues)
        .then((res) => this.onPerformSuccess.bind(this)(res, this.method, this))
        .catch((error) => this.onPerformError(error, this.method, this))
        .finally(() => { })
    },
    performSubmit(validValues) {
      return this.$axios[this.method](this.iUrl, validValues)
    },
    onPerformSuccess(res, method, vm) {
      const msg = this.$t('common.createSuccessMsg')
      this.$message.success(msg)
      const route = this.$route.name.replace('Create', 'List')
      setTimeout(() => this.$router.push({ name: route }))
    },
    onPerformError(error, method, vm) {
      const response = error.response
      const data = response.data
      if (response.status === 400) {
        // eslint-disable-next-line no-unused-vars
        for (const key of Object.keys(data)) {
          let value = data[key]
          if (value instanceof Array) {
            value = value.join(';')
          }
          this.form.form.setFieldError(key, value)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
