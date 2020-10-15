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
        [this.$t('accounts.secret'), ['secret', 'secret_type']],
        [this.$t('common.Other'), ['extra_props', 'comment']]
      ],
      fieldsMeta: {
      },
      url: '/api/v1/accounts/accounts/?account_type=1a91de68-3662-4856-888c-04c95435cf6f'
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
