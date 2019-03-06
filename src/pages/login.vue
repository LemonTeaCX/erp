<template>
  <div class="login">
    <el-row class="login-nav"></el-row>
    <el-row>
      <el-col class="login-main" :offset="4" :span="16">
        <el-row>
          <el-col :span="14">
            <div class="login-desc">this is 描述</div>
          </el-col>
          <el-col :span="10">
              <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-box">
                <el-form-item prop="user">
                  <div>Username</div>
                  <el-input v-model="loginForm.user" placeholder="请输入手机或邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <div>Password</div>
                  <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
                </el-form-item>
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
import {
  login
} from '../api'
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
          { required: true, message: '请输入手机或邮箱', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async login() {
      let _this = this;

      this.loginBtnLoading = true;

      let res = await login(_this.loginForm);
      let isSuccess = res.result;
      console.log(res);

      if (!isSuccess) this.loginBtnLoading = false;
      _this.$message({
        message: res.msg,
        type: isSuccess ? 'success' : 'error',
        onClose(msgIns) {
          if (isSuccess) {
            _this.$router.push('/');
          }
        }
      });
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
  padding-top: 50px;
}
.login-box {
  background: #fafbfc;
  border-radius: 3px;
  padding: 24px;
}
.login-btn {
  width: 100%;
  margin-top: 20px;
}
.el-form-item {
  margin-bottom: 8px;
}
</style>
