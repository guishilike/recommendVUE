<template>
  <div id="logo">
  <el-form :model="loginCheckForm"  ref="loginCheckForm" label-position="left" label-width="0px" class="demo-ruleForm login-container" style="margin-top: 200px">
    <h2 class="title">推 荐 系 统 登 录</h2>
    <el-form-item prop="userName">
      <el-input
        ref="userName"
        v-model="loginCheckForm.userName"
        name="userName"
        type="text"
        prefix-icon="el-icon-user"
        placeholder="用 户 名">
      </el-input>
    </el-form-item>
    <el-form-item prop="passwd">
      <el-input
        ref="passwd"
        type="password"
        name="passwd"
        v-model="loginCheckForm.passwd"
        prefix-icon="el-icon-lock"
        placeholder="密 码">
      </el-input>
    </el-form-item>

    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="loginFunction">登&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>


    export default {
      data() {
        return {
          loginCheckForm: {
            userName: '',
            passwd: '',
          },
        }
      },
      methods:{
      }
    }

</script>

<style lang="scss" scoped>
  #logo{
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%
  }
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
