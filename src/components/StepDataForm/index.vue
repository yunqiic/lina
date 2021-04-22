<template>
  <form-wizard color="gray" error-color="#9b59b6" shape="circle" @on-complete="onComplete">
    <tab-content
      v-for="step in steps"
      :key="step.id"
      :title="step.tab.title"
      :icon="step.tab.icon"
      :before-change="step.form.beforeChange"
    >
      <vue-form-generator
        :ref="step.form.name"
        :model="model"
        :schema="step.form.schema"
        :options="step.form.options"
      />
    </tab-content>
    <!--    demo   -->
    <tab-content title="Personal details" icon="ti-user" :before-change="validateFirstTab">
      <vue-form-generator ref="firstTabForm" :model="model" :schema="firstTabSchema" :options="formOptions" />
    </tab-content>

    <tab-content title="Additional Info" icon="ti-settings" :before-change="validateSecondTab">
      <vue-form-generator ref="secondTabForm" :model="model" :schema="secondTabSchema" :options="formOptions" />
    </tab-content>

    <tab-content title="Last step" icon="ti-check">
      <h4>Your json is ready!</h4>
      <div class="panel-body">
        <pre v-if="model" v-html="prettyJSON(model)" />
      </div>
    </tab-content>

  </form-wizard>
</template>

<script>
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueFormGenerator from 'vue-form-generator'

export default {
  name: 'StepDataForm',
  data() {
    return {
      steps: [
        {
          tab: {
            title: 'test-1',
            icon: 'ti-user'
          },
          form: {
            name: 'testOne',
            schema: {
              fields: [
                {
                  type: 'input',
                  inputType: 'text',
                  label: 'test111',
                  model: 'test111',
                  validator: VueFormGenerator.validators.email
                }
              ]
            },
            beforeChange() {
              console.log(this.$children[0])
              return this.$children[0].validate()
            },
            options: {
              validationErrorClass: 'has-error',
              validationSuccessClass: 'has-success',
              validateAfterChanged: true
            }
          }
        }
      ],
      model: {
        firstName: '',
        lastName: '',
        test111: '',
        email: '',
        streetName: '',
        streetNumber: '',
        city: '',
        country: ''
      },
      formOptions: {
        validationErrorClass: 'has-error',
        validationSuccessClass: 'has-success',
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'First name',
          model: 'firstName',
          required: true,
          validator: VueFormGenerator.validators.string,
          styleClasses: 'col-xs-6'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Last name',
          model: 'lastName',
          required: true,
          validator: VueFormGenerator.validators.string,
          styleClasses: 'col-xs-6'
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Email',
          model: 'email',
          required: true,
          validator: VueFormGenerator.validators.email,
          styleClasses: 'col-xs-12'
        }]
      },
      secondTabSchema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Street name',
            model: 'streetName',
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: 'col-xs-9'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Street number',
            model: 'streetNumber',
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: 'col-xs-3'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'City',
            model: 'city',
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: 'col-xs-6'
          },
          {
            type: 'select',
            label: 'Country',
            model: 'country',
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ['United Kingdom', 'Romania', 'Germany'],
            styleClasses: 'col-xs-6'
          }
        ]
      }
    }
  },
  methods: {
    onComplete: function() {
      alert('Yay. Done!')
    },
    validateFirstTab: function() {
      return this.$refs.firstTabForm.validate()
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate()
    },
    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4)
        json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
        return json.replace(/('(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\'])*'(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
          var cls = 'number'
          if (/^'/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key'
            } else {
              cls = 'string'
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean'
          } else if (/null/.test(match)) {
            cls = 'null'
          }
          return "<span class='" + cls + "'>" + match + '</span>'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
