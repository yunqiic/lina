<template>
  <Page v-bind="$attrs">
    <IBox>
      <form-wizard color="#1ab394" error-color="red" shape="tab" class="form-wizard" @on-complete="onComplete" @on-change="onChange">
        <tab-content v-for="step in steps" :key="step.id" :title="step.title" :icon="step.icon" :before-change="step.beforeChange || beforeChange">
          <component :is="step.component" :ref="step.name" :key="step.key" v-bind="$attrs" />
        </tab-content>
      </form-wizard>
    </IBox>
  </Page>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import IBox from '@/components/IBox'
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
    onComplete: {
      type: Function,
      default: () => {
        console.log('On Complete yeah!')
      }
    },
    onChange: {
      type: Function,
      default: (prevIndex, nextIndex) => {
        this.$log.debug('On change:', prevIndex, nextIndex)
      }
    }
  },
  methods: {
    beforeChange() {
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.form-wizard ::v-deep .wizard-header {
  display: none
}
.form-wizard ::v-deep .wizard-card-footer {
  width: 15%;
  margin-left: 85%;
}
</style>
