<template>
  <GenericCreateUpdatePage :fields="fields" :fields-meta="fieldsMeta" :url="url" />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'

export default {
  name: 'SafeCreateUpdate',
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      url: '/api/v1/accounts/safes/',
      fields: [
        [this.$t('common.Basic'), ['name', 'comment']]
      ],
      fieldsMeta: {
      }
    }
  }
}
</script>

<style scoped>

</style>
