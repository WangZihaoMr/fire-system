<template>
  <div class="app-nav-wrapper">
    <div class="nav-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav-right">
      <el-dropdown @command="handleCommandOptions">
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="email"
              >邮箱：
              {{ userInfo.userEmail }}
            </el-dropdown-item>
            <el-dropdown-item command="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

// 退出登录
const handleCommandOptions = (command) => {
  console.log(command)
  switch (command) {
    case 'email':
      handleToEmail()
      break
    case 'logOut':
      handleLoginOut()
      break
  }
}

// 用户邮箱 && 用户名
const userInfo = computed(() => {
  return store.getters.userInfo
})

// 跳转邮箱
const handleToEmail = () => {}
// 跳转Login页面
const handleLoginOut = () => {
  store.dispatch('user/loginOut')
}
</script>

<style scoped lang="scss">
.app-nav-wrapper {
  padding: 0 20px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #409eff;
}
</style>
