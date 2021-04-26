<template>
  <GenericCreateUpdatePage :fields="fields" :fields-meta="iFieldsMeta" :get-url="getUrl" />
</template>

<script>
import GenericCreateUpdatePage from '@/layout/components/GenericCreateUpdatePage'
import { Required } from '@/components/DataForm/rules'

export default {
  name: 'AccountUpdate',
  components: {
    GenericCreateUpdatePage
  },
  data() {
    return {
      method: 'put',
      fields: [
        [this.$t('common.Basic'), ['safe', 'name', 'type', 'username', 'address', 'secret', 'is_privileged']],
        [this.$t('common.Addition'), ['attrs']],
        [this.$t('common.Other'), ['comment']]
      ],
      fieldsMeta: {
        'safe': {
          rules: [Required],
          el: {
            multiple: false,
            ajax: {
              url: '/api/v1/accounts/safes/'
            }
          }
        },
        'type': {
          readonly: true,
          el: {
            multiple: false,
            ajax: {
              url: '/api/v1/accounts/account-types/'
            }
          }
        },
        attrs: {
          fields: []
        }
      }
    }
  },
  computed: {
    iFieldsMeta() {
      return this.getFieldsMeta()
    }
  },
  methods: {
    getUrl() {
      const params = this.$route.params
      let url = `/api/v1/accounts/accounts/`
      if (params.id) {
        url = `${url}${params.id}/`
      }
      return `${url}?account_type=${this.$route.query.type}`
    },
    getFieldsMeta() {
      // 与创建页面重复
      this.$store.dispatch('common/getUrlMeta', { url: this.getUrl() }).then(data => {
        const remoteMeta = data.actions[this.method.toUpperCase()] || {}
        const attrs = remoteMeta.attrs.children || {}
        const attrsMetaFields = []
        // eslint-disable-next-line no-unused-vars
        for (const fieldName in attrs) {
          const fieldAttr = attrs[fieldName]
          if (!fieldAttr.read_only) {
            attrsMetaFields.push(fieldName)
          }
        }
        this.fieldsMeta.attrs.fields = attrsMetaFields
        if (attrsMetaFields.length === 0) {
          this.fields.splice(1, 1)
        }
      }).catch(err => {
        this.$log.error(err)
      }).finally(() => {
      })
      return this.fieldsMeta
    }
  }
}
</script>

<style scoped>

</style>
