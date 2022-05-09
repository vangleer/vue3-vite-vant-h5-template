<template>
  <div class="t-layout">
    <NavBar title="登录" />
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
import Tabbar from './Tabbar.vue'
</script>

<style lang="scss" scoped></style>
