<template>
  <div class="app-login">
    <!--登陆标题-->
    <div class="login-title">
      <h3>欢迎使用 <span class="title-sub">这个Bug不予解决</span> 系统</h3>
    </div>
    <div class="login-form">
      <div class="form-icon"/>
      <!--登陆表单 -->
      <J-form
        ref="mForm"
        size="small"
        label-width="100px"
        :formData="formData"
        :needToast="false"
        :form-item-s="formItemS"
        :rules="rules"
        @formValue="formValue"
      />
    </div>
    <!--底部版权信息-->
    <p class="app-copyright">Copyright ©2020 bugAdmin.com 这个Bug不予解决 版权所有 Version 1.0.0</p>
  </div>
</template>

<script lang="ts">
import JForm from '../../components/J-Form/index.vue'
import { defineComponent, reactive, ref, toRefs } from 'vue'
export default defineComponent({
  components: {
    JForm
  },
  setup () {
    const mForm = ref(null)
    const data: any = reactive({
      show: false,
      formData: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        passWord: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      },
      formItemS: [
        [
          {
            eType: 'Input',
            placeholder: '请输入用户名',
            label: '用户名',
            prop: 'userName',
            noShow: false,
            span: 24,
            prefixIcon: 'J-user'
          },
          {
            eType: 'Input',
            placeholder: '请输入密码',
            label: '密码',
            prop: 'passWord',
            noShow: false,
            span: 24,
            type: 'password',
            prefixIcon: 'J-unlock'
          },
          {
            prop: 'submit',
            eType: 'Button',
            noShow: false,
            value: '登 录',
            span: 24
          }
        ]
      ]
    })
    const formValue = (params:any) => {
      data.formData[params.prop] = params.value
    }
    return {
      ...toRefs(data),
      formValue,
      mForm
    }
  }
})
</script>
<style lang="less" scoped>
.app-login{
  height: 100%;
  background-image: url("../../assets/login/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  .login-title{
    margin: -50px 0 60px;
    width: 100%;
    text-align: center;
    h3{
      width: 100%;
      color: #ffffff;
      font-weight: bold;
      font-size: 22px;
      .title-sub{
        font-size: 26px;
        color: #f32206;
      }
    }
  }
  .login-form{
    width: 960px;
    background-color: #FFFFFF;
    height: 465px;
    display: flex;
    .form-icon{
      width: 492px;
      background-image: url("../../assets/login/login-icon.png");
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position-y: center;
    }
    /deep/.el-form{
      flex: 1;
      padding: 0 50px;
      align-self: center;
      .el-input__inner{
        border: none;
        text-indent: 55px;
        outline: none;
        background: #eef6fd;
        border-bottom: 2px #d6e7fa solid;
      }
      .icon{
        color: #1592ef;
      }
      .el-button{
        width: 100%;
        border: none;
        color: #fff;
        text-align: center;
        background-color: #1592ef;
        text-indent: 0rem;
        border-radius: 10px;
        text-shadow: 2px 2px 1px rgb(0 0 0 / 20%);
        box-shadow: 2px 2px 1px rgb(0 0 0 / 20%);
        font-size: 16px;
      }
    }
  }
  .app-copyright{
    position: absolute;
    bottom: 20px;
    color: #5d5f60;
  }
}
</style>
