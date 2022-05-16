<template>
  <div class="t-page">{{ t('user.title') }}</div>
  <van-button type="primary" round block @click="handleLogout">{{ t('user.logout') }}</van-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { t } from '/@/plugins/i18n'
import { removeToken } from '/@/utils/auth'

const router = useRouter()
function handleLogout() {
  removeToken()
  router.replace('/login')
}
</script>

<style lang="scss" scoped></style>
