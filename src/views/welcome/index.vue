<template>
  <div class="app-main-wrapper">
    <div class="welocome-wrapper">
      <div class="content">
        <div class="sub-title">欢迎体验</div>
        <div class="title">慕课通用后台管理系统</div>
        <div class="desc">
          - Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统
        </div>
      </div>
      <div class="background-img"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.app-main-wrapper {
  width: 100%;
  height: 100%;
  background-color: #eef0f3;
  .welocome-wrapper {
    width: 100%;
    height: 100%;
    bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .content {
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      text-align: right;
      font-size: 14px;
      color: #999;
    }
  }
  .background-img {
    width: 370px;
    height: 438px;
    margin-left: 170px;
    background: url('http://localhost:8080/src/assets/images/welcome.png');
  }
}
</style>
