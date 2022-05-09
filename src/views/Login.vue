<template>
  <NavBar title="登录" />
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
          <span>用户名</span>
        </div>
        <input v-model="user.username" placeholder="请输入用户名" />
      </div>
      <div class="t-form-item">
        <div class="t-form-label">
          <SvgIcon class="t-form-label-icon" name="password" />
          <span>密码</span>
        </div>
        <input v-model="user.password" placeholder="请输入密码" />
      </div>
      <div class="t-tip">
        <span @click="handleOpt('forgot')">忘记密码/解绑</span>
        <span @click="handleOpt('register')">注册</span>
      </div>
    </div>
    <van-button type="primary" round block @click="handleLogin">登录</van-button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Toast } from 'vant'
import SvgIcon from '/@/components/SvgIcon.vue'
import NavBar from '/@/layout/NavBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = reactive({
  username: '',
  password: ''
})

function handleOpt(type: string) {
  Toast(type === 'forgot' ? '忘记密码/解绑' : '注册')
}

function handleLogin() {
  if (!user.username.trim()) return Toast('请输入用户名！')
  if (!user.password.trim()) return Toast('请输入密码！')

  Toast('登录成功')

  localStorage.setItem('user', JSON.stringfy(user))
  router.replace('/')
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
      &::-webkit-input-placeholder {
        color: #C0C0C0;
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
