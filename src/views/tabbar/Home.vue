<template>
  <div class="t-page">
    <h1 class="t-title">
      <SvgIcon name="logo" size="1rem" color="var(--van-primary-color)" />
      <span>vue3-vite-vant-h5-template</span>
    </h1>
    <div class="t-tip">{{ t('home.tip') }}</div>

    <div class="t-list">
      <div
        v-for="item in list"
        :key="item.title"
        class="t-list-item"
        @click="handleItemClick(item)"
      >
        <span>{{ t(item.title) }}</span>
        <span><van-icon name="arrow" /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { t } from '/@/plugins/i18n'
import SvgIcon from '/@/components/SvgIcon.vue'
import { Dialog, Toast } from 'vant'
import { useAppStore } from '/@/store'

const store = useAppStore()
const list = ref([
  { title: 'home.title1', key: 'theme' },
  { title: 'home.title2', key: 'i18n' },
  { title: 'home.title3', key: 'rem' },
  { title: 'home.title4', key: 'axios' },
  { title: 'home.title5', key: 'pinia' }
])

function handleItemClick(item: any) {
  switch (item.key) {
    case 'theme':
      store.changeTheme()
      break
    case 'i18n':
      store.changeLocale()
      break
    default:
      Toast(item.title)
  }
}

function handleOpen() {
  Dialog({ message: t('home.reminder') })
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
