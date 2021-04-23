<template>
  <form-wizard color="#1ab394" error-color="red" shape="tab" class="form-wizard" @on-complete="onComplete">
    <tab-content v-for="step in steps" :key="step.id" :title="step.tab.title" icon="ti-user" :before-change="step.tab.beforeChange">
      <DataForm :ref="step.form.name" v-loading="step.form.loading" :show-buttons="false" :fields="step.form.totalFields" :form="step.form.form" v-bind="$attrs" v-on="$listeners">
        <FormGroupHeader v-for="(group, i) in step.form.groups" :slot="'id:'+group.name" :key="'group-'+group.name" :title="group.title" :line="i !== 0" />
      </DataForm>
    </tab-content>
  </form-wizard>
</template>

<script>
import DataForm from '@/components/DataForm'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import FormGroupHeader from '@/components/FormGroupHeader'

export default {
  name: 'StepDataForm',
  components: {
    DataForm,
    FormGroupHeader
  },
  props: {
    steps: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onComplete: function() {
      alert('Yay. Done!')
    }
  }
}
</script>

<style lang="less" scoped>
  .form-wizard ::v-deep .wizard-header {
    display: none
  }
</style>
