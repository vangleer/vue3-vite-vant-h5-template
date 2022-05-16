<template>
  <van-tabbar route>
    <template v-for="item in tabbar" :key="item.path">
      <van-tabbar-item replace :to="item.path" :icon="item.meta.icon">
        {{ t(item.meta.title) }}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script setup lang="ts">
import { tabbar } from '/@/router'
import { t } from '/@/plugins/i18n'
</script>

<style lang="scss" scoped></style>
