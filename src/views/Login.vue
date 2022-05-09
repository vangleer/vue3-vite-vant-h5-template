<template>
  <div class="sun-index">
    <div class="sun-logo-box">
      <div class="sun-logo">
        <img class="sun-icon-img" src="/@/assets/imgs/moom_white.png" />
      </div>
    </div>

    <van-button type="primary" round size="large">登录</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Toast } from 'vant'

const state = reactive({
  mobile: '',
  password: '',
  code: '',
  countTime: 60,
  currentCountTime: 0,
  showTime: false,
  timeId: null as any
})
</script>

<style lang="scss" scoped>
.sun-index {
  padding: 20px;
}
.sun-logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  .sun-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 8px;
    background-color: var(--van-primary-color);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
  .sun-icon-img {
    width: 60px;
    height: 60px;
  }
}
</style>
