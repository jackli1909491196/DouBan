<template>
  <div>
    <ul>
      <li>
        <router-link to>影院热映</router-link>
      </li>
      <li>
        <router-link to>欧美新碟榜</router-link>
      </li>
      <li>
        <router-link to="/reg">注册帐号</router-link>
      </li>
      <li>
        <router-link to="/login">登录豆瓣</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style scoped>
div{
   margin-top: 0.65rem;
   overflow: hidden;
}
div ul li{
    float: left;
    width: 50%;
    padding: .03rem;
    box-sizing: border-box;
    font-size: 0.15rem;
    list-style: none;
}
div ul li a {
  display: block;
  padding: 0.12rem 0;
  line-height: 0.2rem;
  text-align: center;
  background-color: #f6f6f6;
  color: #494949;
  border-radius: 0.02rem;
  font-size: 0.15rem;
}
</style>