<template>
  <DataForm ref="dataForm" :show-buttons="false" :fields="totalFields" :form="form" v-bind="$attrs" v-on="$listeners">
    <FormGroupHeader v-for="(group, i) in groups" :slot="'id:'+group.name" :key="'group-'+group.name" :title="group.title" :line="i !== 0" />
  </DataForm>
</template>
<script>
import DataForm from '@/components/DataForm'
import FormGroupHeader from '@/components/FormGroupHeader'

export default {
  name: 'StepDataForm',
  components: {
    DataForm,
    FormGroupHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    totalFields: {
      type: Array,
      default: () => ([])
    },
    groups: {
      type: Array,
      default: () => ([])
    },
    form: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  methods: {
    // beforeChange() {
    //   console.log('>>>> beforeChang of ', this.title)
    // }
  }
}
</script>

<style scoped>

</style>
