<template>
  <van-config-provider :theme="theme">
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
import { onMounted, ref } from 'vue'

const theme = ref<any>('light')
function handleChangeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  document.body.classList.toggle('van-theme-' + theme.value)
})
</script>

<style></style>
