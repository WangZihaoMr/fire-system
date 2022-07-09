<template>
  <div class="app-aside-wrapper">
    <div class="logo-wrapper">
      <img
        class="logo-img"
        src="http://localhost:8080/src/assets/logo.png"
        alt=""
      />
      <span class="logo-title">Manager</span>
    </div>
    <el-menu
      active-text-color="#409eff"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      :unique-opened="true"
      collapse-transition
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-1">菜单管理</el-menu-item>
        <el-menu-item index="1-1">角色管理</el-menu-item>
        <el-menu-item index="1-1">部门管理</el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="1">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>审批管理</span>
        </template>
        <el-menu-item index="1-2">休假申请</el-menu-item>
        <el-menu-item index="1-3">待审批</el-menu-item>
      </el-sub-menu>

      <!-- <el-menu-item index="2">
        <el-icon><setting /></el-icon>
        <span>审批管理</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup>
import { Document, Setting } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.app-aside-wrapper {
  width: 200px;
  height: 100%;
  overflow-y: auto;
  background-color: #001529;
  .logo-wrapper {
    display: flex;
    height: 50px;
    align-items: center;
    .logo-img {
      width: 32px;
      height: 32px;
      margin: 0 16px;
    }
    .logo-title {
      color: #fff;
    }
  }
}
.el-menu {
  border-right: 0;
}
</style>
