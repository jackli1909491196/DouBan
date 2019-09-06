<template>
  <div class="con">
    <router-link to="/login">
      <div class="avatar">
        <img src="../../../static/img/user.jpg" alt />
      </div>
      <div class="pleaseLogin">请先登录</div>
      <div class="cam">
        <img src="../../../static/img/cam.jpg" alt />
      </div>
      <div class="pen">
        <img src="../../../static/img/pen.jpg" alt />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style scoped>
.con {
  padding: 0.1rem 0.18rem;
  overflow: hidden;
  font-size: 0;
}
.avatar {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
}
.avatar img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.pleaseLogin {
  float: left;
  padding-left: 0.1rem;
  line-height: 0.4rem;
  font-size: 0.15rem;
  color: #aaa;
}
.pen {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.08rem;
  margin-left: 0.08rem;
  float: right;
  box-sizing: border-box;
}
.cam {
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.08rem;
  margin-left: 0.08rem;
  float: right;
  box-sizing: border-box;
}
.pen img {
  width: 0.34rem;
  height: 0.34rem;
  margin: 0 auto;
}
.cam img {
  width: 0.34rem;
  height: 0.34rem;
  margin: 0 auto;
}
</style>