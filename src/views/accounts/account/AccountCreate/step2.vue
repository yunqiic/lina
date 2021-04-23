<template>
  <GenericStepCreateForm :url="url" :method="method" :icon="icon" :fields="fields" :fields-meta="fieldsMeta" />
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
      fieldsMeta: {}
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
