<template>
  <div class="t-page">
    <h1 class="t-title">
      <SvgIcon name="logo" size="1rem" color="var(--van-primary-color)" />
      <span>vue3-vite-vant-h5-template</span>
    </h1>
    <div class="t-tip">Vue3移动端开发模板</div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '/@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
.t-page {
  padding: 20px;
  .t-title {
    font-size: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    span {
      padding-left: 8px;
    }
  }
  .t-tip {
    margin: 0 0 40px;
    color: #969799;
    font-size: 14px;
  }
}
</style>
