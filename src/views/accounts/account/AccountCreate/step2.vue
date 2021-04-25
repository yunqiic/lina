<template>
  <GenericStepCreateForm ref="genericStepCreateForm" :url="url" :method="method" :fields="fields" :fields-meta="fieldsMeta" />
</template>
<script>
import GenericStepCreateForm from '@/layout/components/GenericStepCreateForm'
import { Required } from '@/components/DataForm/rules'

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
          rules: [Required],
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
  computed: {
    form() {
      return this.$refs.genericStepCreateForm
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
