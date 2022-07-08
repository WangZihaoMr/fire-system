<template>
  <div class="login-wrapper">
    <el-card class="box-card loginBox">
      <div class="form-title">火星</div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="loginForm.userPwd" />
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-button"
            type="primary"
            @click="handleLoginSumbit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

// store,router实例
const store = useStore()
const router = useRouter()

// login表单所绑定的数据
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

// login表单校验获取DOM元素
const loginFormRef = ref()
const formSize = ref()

// login表单规则
const loginFormRules = reactive({
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})

// 登录事件
const handleLoginSumbit = () => {
  loginFormRef.value.validate(async (valid) => {
    if (!valid) return
    const response = store.dispatch('user/login', loginForm)
    if (response) {
      router.push('/layout')
    }
  })
}
</script>

<style scoped lang="scss">
.login-wrapper {
  width: 100%;
  height: 100%;
  background-color: #f9fcff;
  display: flex;
  justify-content: center;
  align-items: center;
  ::v-deep(.el-card__body) {
    padding: 0;
  }
  .loginBox {
    width: 400px;
    height: 255px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .form-title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .el-form-item {
      margin-bottom: 18px;
    }
    .login-button {
      width: 100%;
    }
  }
}
</style>
