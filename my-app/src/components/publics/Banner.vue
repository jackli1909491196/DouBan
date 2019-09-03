<template>
  <div class="banner">
      <span class="dayLook">每天看点好内容</span>
      <div class="fast"><span>极速下载</span></div>
      <div class="open"><span>打开</span></div>
  </div>
</template>
<script>
export default {
    components:{
    }
};
</script>

<style scoped>
.banner{
    display: flex;
    width: 100%;
    height: 0.8rem;
    background-image: url(../../../static/img/banner.jpg);
    background-size: 100% 100%;
    margin-top: 0.48rem;
    align-items: center;
}
.banner .dayLook{
    font-size: 0.14rem;
    padding-left: 0.35rem;
    color: #2ca532;
}
.banner .fast{
    width: 0.8rem;
    height: 0.28rem;
    font-size: 0.13rem;
    font-weight: 700;
    color: #ffffff;
    background-color:#42bd56;
    line-height: 0.28rem;
    text-align: center;
    border-radius: 0.03rem;
    margin-left: 0.93rem;
}
.banner .open{
    width: 0.52rem;
    height: 0.26rem;
    font-size: 0.13rem;
    color: #42bd56;
    line-height: 0.26rem;
    font-weight: 700;
    text-align: center;
    border-radius: 0.03rem;
    border: 0.01rem solid #42bd56;
    margin-left: 0.05rem;
}
</style>