<template>
  <div class="newsCon">
    <div class="listTitle">
      <h3>{{newsTitle}}</h3>
      <p>{{newsCon}}</p>
    </div>
    <div class="listImg">
      <img :src="newsImg" alt />
    </div>
    <span>{{newsType}}</span>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    newsTitle:{
        type:String,
        required:true
    },
     newsCon:{
        type:String,
        required:true
    },
     newsImg:{
        type:String,
        required:true
    },
     newsType:{
        type:String,
        required:true
    },
  }
};
</script>

<style scoped>
.newsCon {
  margin-bottom: 0.1rem;
  width: 100%;
  margin-top: 0.2rem;
  overflow: hidden;
  border-bottom: 0.01rem solid #ccc;
  font-size: 0;
}
.listTitle {
  width: 70%;
  float: left;
  margin-bottom:0.1rem;
}
.listTitle h3 {
  font-size: 0.17rem;
  font-weight: 500;
  color: #494949;
  line-height: 1.5;
  margin-bottom: 0.06rem;
}
.listTitle p {
  font-size: 0.12rem;
  color: #aaa;
  line-height: 1.5;
}
.listImg {
  width: 30%;
  float: left;
}
.listImg img {
  width: 0.85rem;
  height: 0.85rem;
  padding-left: 0.17rem;
  padding-top: 0.1rem;
  margin-bottom: 0.3rem;
}
.newsCon span {
  display: block;
  font-size: 0.12rem;
  color: #ccc;
  margin-bottom: 0.2rem;
  text-align: left;
}
</style>