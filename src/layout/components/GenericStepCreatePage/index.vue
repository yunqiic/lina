<template>
  <Page v-bind="$attrs">
    <IBox>
      <form-wizard color="#1ab394" error-color="red" shape="tab" class="form-wizard" @on-complete="onComplete" @on-change="onChange">
        <tab-content v-for="step in steps" :key="step.id" :title="step.title" :icon="step.icon" :before-change="step.beforeChange ? step.beforeChange : defaultBeforeChange">
          <component :is="step.component" :ref="step.name" :key="step.key" />
        </tab-content>
      </form-wizard>
    </IBox>
  </Page>
</template>

<script>
import IBox from '@/components/IBox'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Page from '@/layout/components/Page'
export default {
  name: 'GenericStepCreatePage',
  components: {
    IBox, Page
  },
  props: {
    steps: {
      type: Array,
      required: true
    },
    activeStep: {
      type: String,
      default: ''
    },
    onComplete: {
      type: Function,
      default: () => {
        alert('On Complete yeah!')
      }
    },
    onChange: {
      type: Function,
      default: (prevIndex, nextIndex) => {
        console.log('On change:', prevIndex, nextIndex)
      }
    }
  },
  methods: {
    defaultBeforeChange() {
      console.log(this)
      return true
    }
  }

}
</script>

<style lang="less" scoped>
.form-wizard ::v-deep .wizard-header {
  display: none
}
</style>
