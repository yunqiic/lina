<template>
  <AutoDataForm ref="form" :show-buttons="false" :url="url" v-bind="$attrs" v-on="$listeners" @submit="handleSubmit" />
</template>

<script>
import AutoDataForm from '@/components/AutoDataForm'
export default {
  name: 'GenericStepCreateForm',
  components: {
    AutoDataForm
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    handleSubmit: {
      type: Function,
      default: (values, formName) => {

      }
    }
  },
  computed: {
    form() {
      return this.$refs.form
    },
    dataForm() {
      return this.form.$refs.dataForm
    },
    elForm() {
      return this.dataForm.$refs.form
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
