<template>
  <van-config-provider :theme="(store.theme as any)">
    <div class="t-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </van-config-provider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from './store'

const store = useAppStore()

onMounted(() => {
  document.body.classList.toggle('van-theme-' + store.theme)
})
</script>

<style></style>
