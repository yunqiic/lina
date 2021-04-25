<template>
  <GenericStepCreateForm ref="genericStepCreateForm" :url="url" :method="method" :fields="fields" :fields-meta="fieldsMeta" class="generic-step-create-form" />
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
  computed: {
    form() {
      return this.$refs.genericStepCreateForm
    }
  }
}
</script>

<style lang="less" scoped>
.generic-step-create-form ::v-deep .el-select {
  width: 100%;
}
</style>
