<template>
  <div class="radioList">
    <div class="radioTitle">
      <a href="#">
        <img src="../../../static/img/dou.png" alt />
      </a>
      <a href="#">
        <div class="write">
          <strong>豆瓣</strong>
          <span>写了日记</span>
          <div class="time">2017-03-01 19:30:41</div>
        </div>
      </a>
    </div>
    <div class="radioCon">
      <div class="writeTitle">豆瓣App 4.12.0 主要更新</div>
      <div class="writeCon">- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</div>
    </div>
    <div class="info">
      <span class="btn like">
        <i>4</i>
      </span>
      <span class="btn com">
        <i>0</i>
      </span>
      <span class="btn ret">
        <i>1</i>
      </span>
      <span class="btn more"></span>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>

<style scoped>
.radioList {
  font-size: 0;
  position: relative;
  padding: 0 0 0.2rem 0.5rem;
  margin: 0.2rem 0.18rem;
}
.radioList ::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.01rem;
  background: #e8e8e8;
}
.radioTitle {
  margin-left: -0.5rem;
}
.radioTitle a {
  display: inline-block;
}
.radioTitle img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
  border-radius: 50%;
}
.radioTitle .write {
  font-size: 0.17rem;
  line-height: 1;
  color: #494949;
}
.radioTitle .time {
  font-size: 0.14rem;
  margin-top: 0.06rem;
  line-height: 1;
  color: #aaa;
}
.radioCon {
  margin: 0.1rem 0 0.2rem;
  padding: 0.15rem;
  border-radius: 0.02rem;
  border: 0.01rem solid #d8d8d8;
}
.writeTitle {
  font-size: 0.17rem;
  font-weight: 500;
  line-height: 1.4;
  color: #494949;
  margin-bottom: 0.05rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.writeCon {
  font-size: 0.12rem;
  line-height: 0.16rem;
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info span {
  margin-right: 0.2rem;
  font-size: 0.14rem;
}
.info span i {
  font-style: normal;
  color: #ccc;
  margin-left: 0.03rem;
  margin-top: -0.03rem;
}
.info .btn::before {
  content: "";
  width: 0.24rem;
  height: 0.24rem;
  background-position: 50%;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: -0.04rem;
}
.info .like::before {
  background: url(../../../static/img/like.jpg);
}
.info .com::before {
  background: url(../../../static/img/mes.jpg);
}
.info .ret::before {
  background: url(../../../static/img/retweet.jpg);
}
.info .more::before {
  background: url(../../../static/img/sandian.jpg);
  float: right;
}
</style>