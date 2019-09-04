<template>
  <div class="con">
    <div class="navCon">
      <div>
        <router-link to="/movie">
          <h3>电影</h3>
          <p>影院热映</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>电视</h3>
          <p>正在热播</p>
        </router-link>
      </div>
      <div>
        <router-link to="/book">
          <h3>图书</h3>
          <p>畅销排行</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>同城</h3>
          <p>周末活动</p>
        </router-link>
      </div>
      <div>
        <router-link to="/group">
          <h3>小组</h3>
          <p>志趣相投</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>音乐</h3>
          <p>新碟榜</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>阅读</h3>
          <p>电子书</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>游戏</h3>
          <p>虚拟世界</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>应用</h3>
          <p>玩手机</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>东西</h3>
          <p>心爱之物</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>FM</h3>
          <p>红心歌单</p>
        </router-link>
      </div>
      <div>
        <router-link to="/search">
          <h3>市集</h3>
          <p>购买原创</p>
        </router-link>
      </div>
    </div>
    <div class="navBottom">
      <div class="nav-item">
        <router-link to="/reg">注册帐号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/home">使用桌面版</router-link>
        <router-link to="/home">使用豆瓣App</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style scoped>
.con {
  width: 100%;
  padding-top: 0.73rem;
}
.navCon {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.navCon div {
  margin-bottom: 0.2rem;
  width: 33.33%;
  text-align: center;
  margin-bottom: 0.25rem;
}
.navCon div a {
  display: block;
  width: 100%;
  height: 100%;
}
.navCon div h3 {
  font-size: 0.24rem;
  font-weight: 400;
  line-height: 0.28rem;
}
.navCon div p {
  font-size: 0.12rem;
  color: #999;
  height: 0.17rem;
}
.navCon div:nth-child(1) h3 {
  color: rgb(35, 132, 232);
}
.navCon div:nth-child(2) h3 {
  color: rgb(122, 106, 219);
}
.navCon div:nth-child(3) h3 {
  color: rgb(159, 120, 96);
}
.navCon div:nth-child(4) h3 {
  color: rgb(230, 70, 126);
}
.navCon div:nth-child(5) h3 {
  color: rgb(42, 184, 204);
}
.navCon div:nth-child(6) h3 {
  color: rgb(244, 143, 46);
}
.navCon div:nth-child(7) h3 {
  color: rgb(159, 120, 96);
}
.navCon div:nth-child(8) h3 {
  color: rgb(87, 116, 197);
}
.navCon div:nth-child(9) h3 {
  color: rgb(89, 108, 221);
}
.navCon div:nth-child(10) h3 {
  color: rgb(225, 100, 77);
}
.navCon div:nth-child(11) h3 {
  color: rgb(64, 207, 169);
}
.navCon div:nth-child(12) h3 {
  color: rgb(66, 189, 86);
}
.navBottom {
  font-size: 0;
  width: 100%;
  border-bottom: 0.01rem solid #f3f3f3;
}
.navBottom .nav-item {
  border-top: 0.01rem solid #f3f3f3;
  padding: 0.13rem 0;
  text-align: center;
}
.navBottom .nav-item a {
  width: 50%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.15rem;
  color: #42bd56;
}
.navBottom .nav-item a {
  width: 50%;
  display: inline-block;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.15rem;
  color: #42bd56;
}
.navBottom .nav-item a:first-child {
  border-right: 0.01rem solid #e5e5e5;
}
</style>