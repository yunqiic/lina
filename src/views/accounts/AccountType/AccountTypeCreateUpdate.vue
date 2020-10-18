<template>
  <GenericCreateUpdatePage :initial="initial" v-bind="$data" />
</template>

<script>
import { GenericCreateUpdatePage } from '@/layout/components'

export default {
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      fields: [
        [this.$t('common.Basic'), ['name', 'category', 'protocol', 'prop_fields',
          'custom_fields'
        ]]
      ],
      fieldsMeta: {
        prop_fields: {
          el: {
            multiple: true,
            ajax: {
              url: '/api/v1/accounts/account-prop-fields/'
            },
            value: []
          }
        }
      },
      url: '/api/v1/accounts/account-types/'
    }
  },
  computed: {
    initial() {
      return this.$route.query
    }
  }
}
</script>

<style lang="less" scoped>

</style>
