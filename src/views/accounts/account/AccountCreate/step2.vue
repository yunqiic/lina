<template>
  <GenericStepCreateForm ref="genericStepCreateForm" :url="url" :method="method" :icon="icon" :fields="fields" :fields-meta="fieldsMeta" />
</template>
<script>
import GenericStepCreateForm from '@/layout/components/GenericStepCreateForm'

export default {
  name: 'Step2',
  components: {
    GenericStepCreateForm
  },
  props: {
  },
  data() {
    return {
      method: 'post',
      url: '/api/v1/accounts/accounts/',
      fields: ['type'],
      fieldsMeta: {
        type: {
          el: {
            multiple: false,
            ajax: {
              url: `/api/v1/accounts/account-types/?category=${this.$route.query.category || 'network_device'}`
            }
          }
        }
      }
    }
  },
  methods: {
    getFormValue() {
      return this.$refs.genericStepCreateForm.getFormValue()
    }
  }
}
</script>

<style scoped>

</style>
