<template>
  <GenericStepCreateForm :url="url" :method="method" :fields="fields" :fields-meta="fieldsMeta" />
</template>
<script>
import GenericStepCreateForm from '@/layout/components/GenericStepCreateForm'

export default {
  name: 'Step1',
  components: {
    GenericStepCreateForm
  },
  props: {
  },
  data() {
    return {
      method: 'post',
      url: '/api/v1/accounts/account-types/',
      fields: ['category'],
      fieldsMeta: {}
    }
  },
  methods: {
    beforeChange() {
      console.log('>>>> beforeChang of Step1')
      return true
    }
  }
}
</script>

<style scoped>

</style>
