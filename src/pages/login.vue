<template>
  <div class="login">
    <el-row class="login-nav"></el-row>
    <el-row>
      <el-col class="login-main" :offset="6" :span="12">
        <el-row>
          <el-col :span="14">
            <div class="login-desc">this is 描述</div>
          </el-col>
          <el-col :span="10">
              <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-box">
                <el-form-item prop="user">
                  <div>Username</div>
                  <el-input v-model="loginForm.user" placeholder="请输入用户名或手机"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <div>Password</div>
                  <el-input type="password" v-model="loginForm.password" @keyup.enter.native="login" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-row class="login-else">
                  <el-col :span="12">
                    <el-button type="text">忘记密码</el-button>
                  </el-col>
                  <el-col :span="12" class="tar">
                    <el-button type="text" @click="register">注册</el-button>
                  </el-col>
                </el-row>
                <el-button class="login-btn" type="success"
                  :disabled="loginBtnLoading" :loading="loginBtnLoading"
                  @click="login">登录</el-button>
              </el-form>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { login } from '../api';
import Util from '../util/util';

let { setCookie } = Util;
export default {
  name: 'Login',
  data() {
    return {
      loginBtnLoading: false,
      loginForm: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入用户名或手机', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async login() {
      let _this = this,
        isValid = await this.validForm();
      if (!isValid) return;

      this.loginBtnLoading = true;
      let res = await login(_this.loginForm),
        isSuccess = res.result;

      if (!isSuccess) this.loginBtnLoading = false;
      _this.$message({
        message: res.msg,
        type: isSuccess ? 'success' : 'error',
        onClose(msgIns) {
          if (isSuccess) {
            _this.$router.push('/');
            setCookie('token', res.token);
            _this.$store.dispatch('setUserInfo', res.data);
          }
        }
      });
    },
    validForm() {
      return new Promise((resolve, reject) => {
        this.$refs['loginForm'].validate(valid => resolve(valid));
      });
    },
    register() {
      this.$router.push('/register');
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: #2b3137;
}
.login-nav {
  height: 80px;
  background: #24292e;
}
.login-main {
  padding-top: 100px;
}
.login-box {
  background: #fafbfc;
  border-radius: 3px;
  padding: 24px;
  .login-else {
    margin-top: 12px;
  }
  .login-btn {
    width: 100%;
  }
  .el-form-item {
    margin-bottom: 8px;
  }
}
</style>
