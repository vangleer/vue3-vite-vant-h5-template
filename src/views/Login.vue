<template>
  <NavBar :title="t('login')" />
  <div class="t-page">
    <div class="t-logo-box">
      <div class="t-logo">
        <SvgIcon name="logo" color="#fff" size="40px" />
      </div>
    </div>

    <div class="t-form">
      <div class="t-form-item">
        <div class="t-form-label">
          <van-icon class="t-form-label-icon" name="user-o"></van-icon>
          <span>{{ t('username') }}</span>
        </div>
        <input v-model="user.username" :placeholder="t('pleaseInput') + t('username')" />
      </div>
      <div class="t-form-item">
        <div class="t-form-label">
          <SvgIcon class="t-form-label-icon" name="password" color="var(--van-text-color)" />
          <span>{{ t('password') }}</span>
        </div>
        <input v-model="user.password" :placeholder="t('pleaseInput') + t('password')" />
      </div>
      <div class="t-tip">
        <span @click="handleOpt('forgot')">{{ t('forgotPassword') }}</span>
        <span @click="handleOpt('register')">{{ t('register') }}</span>
      </div>
    </div>
    <van-button type="primary" round block @click="handleLogin">{{ t('login') }}</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { t } from '/@/plugins/i18n'
import { Toast } from 'vant'
import SvgIcon from '/@/components/SvgIcon.vue'
import NavBar from '/@/layout/NavBar.vue'
import { useRouter } from 'vue-router'
import { setToken } from '/@/utils/auth'

const router = useRouter()
const user = reactive({
  username: '',
  password: ''
})

function handleOpt(type: string) {
  Toast(type === 'forgot' ? t('forgotPassword') : t('register'))
}

async function handleLogin() {
  if (!user.username.trim()) return Toast(`${t('pleaseInput')}${t('username')}！`)
  if (!user.password.trim()) return Toast(`${t('pleaseInput')}${t('password')}！`)

  Toast(`${t('login')}${t('success')}！`)

  const token = 'T-APP-TOKEN'
  setToken(token)
  router.replace('/')
  user.username = ''
  user.password = ''
}
</script>

<style lang="scss" scoped>
.t-page {
  padding: 30px;
  font-size: 16px;
}
.t-logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  .t-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 8px;
    background-color: var(--van-primary-color);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
  .t-icon-img {
    width: 60px;
    height: 60px;
  }
}
.t-form {
  margin-bottom: 50px;
  .t-form-item {
    width: 100%;
    margin-bottom: 10px;
    .t-form-label {
      font-weight: 500;
      display: flex;
      // align-items: flex-end;
      span {
        margin-left: 6px;
      }
      &-icon {
        font-size: 18px;
      }
    }
    input {
      border: none;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #eee;
      padding: 0px 5px;
      font-size: 16px;
      background-color: transparent;
      &::-webkit-input-placeholder {
        color: #c0c0c0;
      }
    }
  }
}
.t-tip {
  display: flex;
  justify-content: space-between;
  color: var(--van-primary-color);
  font-size: 14px;
  cursor: pointer;
}
</style>
