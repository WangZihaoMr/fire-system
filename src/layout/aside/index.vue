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
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.app-aside-wrapper {
  width: 200px;
  height: 100%;
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
</style>
