<template>
  <GenericCreateUpdatePage :fields="fields" :fields-meta="fieldsMeta" :url="url" />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'
import Property from '../components/Property/index'

export default {
  name: 'Index',
  components: {
    GenericCreateUpdatePage,
    // eslint-disable-next-line vue/no-unused-components
    Property
  },
  data() {
    return {
      url: '/api/v1/accounts/account-types/',
      fields: [
        [this.$t('common.Basic'), ['name', 'category', 'protocol', 'secret_type']],
        [this.$t('common.Addition'), ['properties']],
        [this.$t('common.Other'), ['comment']]
      ],
      fieldsMeta: {
        properties: {
          component: Property
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
