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
        [this.$t('common.Basic'), ['name', 'username', 'address', 'type', 'namespace']],
        [this.$t('accounts.Secret'), ['secret']],
        [this.$t('common.Other'), ['extra_props', 'comment']]
      ],
      fieldsMeta: {
        type: {
          el: {
            multiple: false,
            ajax: {
              url: '/api/v1/accounts/account-types/'
            },
            value: []
          }
        },
        namespace: {
          el: {
            multiple: false,
            ajax: {
              url: '/api/v1/namespaces/namespaces/'
            },
            value: []
          }
        }
      },
      url: '/api/v1/accounts/accounts/'
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
