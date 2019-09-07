<template>
  <div class="con">
    <div class="title">
      <span>
        <a href="#" @click="funl()">取消</a>
      </span>
      <strong>登录豆瓣</strong>
    </div>
    <div class="inputDiv">
      <input type="text" id="userEmail" placeholder="邮箱" />
      <input type="password" id="userPass" placeholder="Token" />
      <button @click="fun()">登录</button>
    </div>
    <div class="loginBut">
      <span>使用其他方式登录 & 找回密码</span>
    </div>
    <div class="footer">
      <span>注册豆瓣账号</span>&nbsp;&nbsp;&nbsp;
      <span>下载豆瓣App</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fun() {
      // 得到输入框的值
      // var userEmail = document.getElementById("userEmail").value;
      // var userPass = document.getElementById("userPass").value;
      // var param=new URLSearchParams;
      // param.append("userEmail",userEmail);
      // param.append("userPass",userPass);
      // this.axios({
      //   url:"http://localhost:3000/login",
      //   method:"post",
      //   data:param
      // }).then((ok)=>{
      //   console.log(ok);
        alert("登录成功");
        this.$router.push("/home");
  //     },(err)=>{
  //       console.log(err);
  //       alert("登录失败");
  //     })
  //   },
  //   funl(){
  //     this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 0.45rem;
  font-size: 0;
  line-height: 0.45rem;
  border-bottom: 0.01rem solid #eee;
  box-sizing: border-box;
  padding: 0 0.2rem;
}
.con .title span a {
  font-size: 0.15rem;
  font-weight: 300;
  color: #42bd56;
}
.con .title strong {
  font-size: 0.18rem;
  font-weight: 700;
  color: #000;
  margin-left: 1rem;
}
.inputDiv {
  width: 100%;
  margin-top: 0.3rem;
  padding: 0 0.15rem;
  box-sizing: border-box;
  font-size: 0px;
}
.inputDiv input {
  width: 100%;
  height: 0.44rem;
  box-sizing: border-box;
  font-size: 0.15rem;
  background: #fff;
  border: 0.01rem solid #ccc;
  border-top-left-radius: 0.03rem;
  border-top-right-radius: 0.03rem;
  outline: none;
  text-indent: 0.1rem;
}
.inputDiv input:nth-child(2) {
  border-top: none;
}
::placeholder {
  color: #aaa;
}
.inputDiv button {
  width: 100%;
  height: 0.44rem;
  background: #42bd56;
  color: #ffffff;
  font-size: 0.16rem;
  border: none;
  outline: none;
  margin-top: 0.1rem;
}
.loginBut {
  color: #aaa;
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.2rem;
}
.footer {
  font-size: 0.15rem;
  color: #17aa52;
  text-align: center;
  margin-top: 0.4rem;
}
</style>