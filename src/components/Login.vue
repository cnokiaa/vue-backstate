<template>
    <div id="login">
        <el-input v-model="name" placeholder="用户名" id="name"></el-input>
        <el-input type="password" placeholder="密码" v-model="pass" auto-complete="off" @keyup.enter.native="submit"></el-input>
        <el-button type="primary" id="bt" native-type="submit" @click="submit">登录</el-button>
    </div>
</template>
<style>
#login{
    width:300px;
    height:170px;
    background:#e5e5e5;
    padding:20px;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    -o-transform:translate3d(-50%, -50%, 0);		
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
#name{
    margin-bottom:20px;
}
#bt{
    margin-top:25px;
}
</style>

<script>
import {ut} from '../utils/ut'
export default {
  data() {
    return {
      name: '',
      pass: ''
    }
  },
  methods:{
    submit(){
        if(this.name == ''){
            return ut.error(this,'用户名不能为空')
        }
        if(this.pass == ''){
            return ut.error(this,'密码不能为空')
        }
        sessionStorage.userToken = this.name
        ut.success(this,'登录成功') 
        if(this.$route.query.redirect == '' || typeof(this.$route.query.redirect) == 'undefined'){
            this.$router.push('/'); 
        } else {
            this.$router.push(this.$route.query.redirect);  //跳转到之前的页面
        }
    }
  }
}
</script>