<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
  <h1>包裹入库</h1>
    <a-form-item
      label="运单号"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'trackingNumber',
          {rules: [{ required: true, message: 'Please input your trackingNumber!' }]}
        ]"
      />
    </a-form-item>

    <a-form-item
      label="收件人"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'addressee',
          {rules: [{ required: true, message: 'Please input your addressee!' }]}
        ]"
      />
    </a-form-item>


  <a-form-item
      label="电话"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'telephone',
          {rules: [{ required: true, message: 'Please input your telephone!' }]}
        ]"
      />

    </a-form-item>
      <a-form-item
      label="重量"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-input
        v-decorator="[
          'weight',
          {rules: [{ required: true, message: 'Please input your weight!' }]}
        ]"
      />
    </a-form-item>

    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        this.$store.dispatch("postPackages",values);
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
    // ,
    // handleSelectChange (value) {
    //   console.log(value);
    //   this.form.setFieldsValue({
    //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    //   })
    // }
  }
}
</script>

<style scoped>
.message{
  width:200px;
}
</style>