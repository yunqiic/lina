<template>
  <GenericStepCreateForm :url="iUrl" :method="method" :fields="fields" :fields-meta="iFieldsMeta" />
</template>
<script>
import GenericStepCreateForm from '@/layout/components/GenericStepCreateForm'

export default {
  name: 'Step3',
  components: {
    GenericStepCreateForm
  },
  props: {
  },
  data() {
    return {
      method: 'post',
      fields: [
        [this.$t('common.Basic'), ['username', 'address', 'secret']],
        [this.$t('common.Attrs'), ['attrs']],
        [this.$t('common.Other'), ['comment']]
      ],
      fieldsMeta: {
        attrs: {
          fields: []
        }
      }
    }
  },
  computed: {
    iUrl() {
      return this.getUrl()
    },
    iFieldsMeta() {
      return this.getFieldsMeta()
    }
  },
  mounted() {
  },
  methods: {
    getUrl() {
      this.$log.debug('account_type: ', this.$route)
      return `/api/v1/accounts/accounts/?account_type=${this.$route.query.account_type}`
    },
    getFieldsMeta() {
      this.$store.dispatch('common/getUrlMeta', { url: this.iUrl }).then(data => {
        const remoteMeta = data.actions[this.method.toUpperCase()] || {}
        const attrs = remoteMeta.attrs.children || {}
        this.fieldsMeta.attrs.fields = Object.keys(attrs)
        console.log('>>>>>>>: fieldsMeta: ', this.fieldsMeta)
      }).catch(err => {
        this.$log.error(err)
      })
      return this.fieldsMeta
    },
    beforeChange() {
      console.log('>>>> beforeChang of Step1')
      return true
    }
  }
}
</script>

<style scoped>

</style>
