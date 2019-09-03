<template>
  <div class="header">
    <span>
      <router-link to="/home"><img src="../../../static/img/douban_title.jpg" alt=""></router-link>
    </span>
    <ul>
      <li>
        <router-link to="/movie">电影</router-link>
      </li>
      <li>
        <router-link to="/book">图书</router-link>
      </li>
      <li>
        <router-link to="/radio">广播</router-link>
      </li>
      <li>
        <router-link to="/group">小组</router-link>
      </li>
    </ul>
    <router-link to="/search" class="searchImg"><img src="../../../static/img/douban_search.jpg" alt=""></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 0.48rem;
  padding-bottom: 0.48rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 0.18rem;
  background-color: #ffffff;
  font-size: 0.16rem;
  border-bottom: 0.01rem solid #f3f3f3;
}
.header span a {
  font-size: 0.24rem;
  color: #00b600;
  font-weight: 500;
  display: inline-block;
}
.header span a img{
  width: 0.55rem;
  height: 0.25rem;
}
.header ul {
  display: flex;
  margin-left: 0.8rem;
}
.header ul li {
  list-style: none;
  flex: 1;
  padding: 0 0.05rem;
}
.header ul li a {
  font-size: 0.16rem;
}
.header ul li:nth-child(1) a {
  color: rgb(35, 132, 232);
}
.header ul li:nth-child(2) a {
  color: rgb(159, 120, 96);
}
.header ul li:nth-child(3) a {
  color: rgb(228, 168, 19);
}
.header ul li:nth-child(4) a {
  color: rgb(42, 184, 204);
}
.searchImg{
  margin-left: 0.05rem;
}
</style>
