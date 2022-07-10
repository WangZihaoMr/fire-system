<template>
  <div class="">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path === '/welcome'"
        >欢迎体验Vue3全栈课程</el-breadcrumb-item
      >
      <el-breadcrumb-item v-else>{{ $route.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup></script>

<style scoped lang="scss"></style>
