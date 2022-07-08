<template>
  <el-container class="layout-wrapper">
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-nav></app-nav>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppMain from './AppMain'
import AppNav from './AppNav'
import AppAside from './aside'
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100%;
  .el-header {
    height: 50px;
    padding: 0;
  }
}
</style>
