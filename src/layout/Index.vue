<template>
  <div class="t-layout">
    <NavBar :title="t(store.title as string)" />
    <div class="t-main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Tabbar />
  </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'
import { t } from '/@/plugins/i18n'
import Tabbar from './Tabbar.vue'
import { useAppStore } from '/@/store'

const store = useAppStore()
</script>

<style lang="scss" scoped></style>
