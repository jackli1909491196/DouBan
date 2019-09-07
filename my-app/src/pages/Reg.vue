<template>
  <div class="con">
    <div class="title">
      <h1>欢迎加入豆瓣</h1>
    </div>
    <div class="inputdiv">
    <input type="text" id="userEmail" placeholder="邮箱" />
      <input type="password" id="userPass" placeholder="密码" />
      <input type="text" id="userName" placeholder="用户名" />
      <button @click="fun()">立即注册</button>
    </div>
    <div class="regBut">
      <span>点击「注册」代表你已阅读并同意用户使用协议</span>
    </div>
    <div class="footer">下载豆瓣App</div>
  </div>
</template>
<script>
export default {
  methods: {
    fun() {
    //     var userEmail = document.getElementById("userEmail").value;
    //   var userPass = document.getElementById("userPass").value;
    //   var userName = document.getElementById("userName").value;
    // console.log(userEmail + "---" + userPass + "---" + userName);
    //   this.axios({
    //     url:"http://localhost:3000/reg",
    //     method:"get",
    //     params:{
    //       userEmail,
    //       userPass,
    //       userName
    //     }
    //   }).then((ok)=>{
    //        console.log(ok);
        alert("注册成功");
        this.$router.push("/login");
    //   },(err)=>{
        // console.log(err);
        // alert("注册失败");
      // })
    }
  }
};
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
}
.con .title h1 {
  font-size: 0.4rem;
  font-weight: 300;
  color: #42bd56;
  margin: 10% auto;
}
.inputdiv {
  width: 100%;
  padding: 0 0.15rem;
  box-sizing: border-box;
  font-size: 0px;
}
.inputdiv input {
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
.inputdiv input:nth-child(2) {
  border-top: none;
}
.inputdiv input:nth-child(3) {
  border-top: none;
}
::placeholder {
  color: #aaa;
}
.inputdiv button {
  width: 100%;
  height: 0.44rem;
  background: #42bd56;
  color: #ffffff;
  font-size: 0.16rem;
  border: none;
  outline: none;
  margin-top: 0.1rem;
}
.regBut {
  color: #aaa;
  font-size: 0.14rem;
  text-align: center;
  margin-top: 0.2rem;
}
.footer {
  font-size: 0.16rem;
  color: #42bd56;
  text-align: center;
  margin-top: 0.4rem;
}
</style>