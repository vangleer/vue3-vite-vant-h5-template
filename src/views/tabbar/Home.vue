<template>
  <div class="t-page">
    <h1 class="t-title">
      <SvgIcon name="logo" size="1rem" color="var(--van-primary-color)" />
      <span>vue3-vite-vant-h5-template</span>
    </h1>
    <div class="t-tip">Vue3移动端开发模板</div>
    <div class="t-tip" @click="handleOpen">{{ t('username') }}</div>

    <div class="t-list">
      <div v-for="item in list" :key="item.title" class="t-list-item" @click="handleItemClick(item)">
        <span>{{ item.title }}</span>
        <span><van-icon name="arrow" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { t, changeLocale } from '/@/plugins/i18n'
import SvgIcon from '/@/components/SvgIcon.vue'
import { Dialog } from 'vant'
const list = ref([
  { title: '主题切换', key: 'theme' },
  { title: '国际化', key: 'i18n' },
  { title: 'rem移动端适配方案', key: 'rem' },
  { title: 'axios二次封装', key: 'axios' },
  { title: 'pinia状态管理', key: 'pinia' }
])

function handleItemClick(item: any) {
  console.log('啦啦啦啦', item)
  changeLocale()
}

function handleOpen() {
  Dialog({ message: '提示' })
}
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
    color: var(--van-text-color-2);
    font-size: 14px;
  }

  .t-list {
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background-color: var(--common-background-color);
      padding: 0 20px;
      cursor: pointer;
      margin-bottom: 14px;
    }
  }
}
</style>
