<template>
  <div class="con">
    <h3>分类浏览</h3>
    <ul>
      <li>
        <router-link to>
          经典
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          冷门佳片
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          豆瓣高分
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          动作
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          喜剧
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          爱情
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          悬疑
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          恐怖
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          科幻
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          治愈
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          文艺
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          成长
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          华语
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          欧美
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          韩国
          <span></span>
        </router-link>
      </li>
      <li>
        <router-link to>
          日本
          <span></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.con {
  margin-top: 0.1rem;
  font-size: 0;
}
.con h3 {
  height: 0.26rem;
  line-height: 0.26rem;
  padding: 0 0.16rem;
  display: inline-block;
  font-size: 0.17rem;
  font-weight: 400;
  color: #111;
}
.con ul {
  margin: 0.16rem 0 0 0.16rem;
  overflow: hidden;
}
.con ul li {
  float: left;
  box-sizing: border-box;
  width: 50%;
  padding-right: 0.18rem;
  height: 0.42rem;
  line-height: 0.42rem;
  font-size: 0.16rem;
  border-top: 0.01rem solid #eee;
  border-right: 0.01rem solid #eee;
  list-style: none;
  text-indent: 0.13rem;
}
.con ul li a {
  color: #42bd56;
}
.con ul li a span {
  color: #ccc;
  float: right;
  font-weight: 700;
  display: block;
  border-right: 0.01rem solid #ccc;
  border-bottom: 0.01rem solid #ccc;
  width: 0.08rem;
  height: 0.08rem;
  transform: rotate(-45deg);
  margin-top: 0.1rem;
}
</style>