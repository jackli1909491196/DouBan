<template>
  <div class="homeDiv">
    <header-bar></header-bar>
    <nav-title></nav-title>
    <div class="loadImg" v-if="arr.length<=0">
      <img src="../../static/img/loading.gif" alt />
    </div>
    <div v-else>
      <div v-for="(v,i) in arr" :key="i">
        <router-link :to="{path:'/shoplist',query:{id:v.id}}">
          <news-list
            :newsTitle="v.title"
            :newsCon="v.title"
            :newsImg="v.image"
            :newsType="v.category_name"
          ></news-list>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "../components/publics/HeaderBar";
import NavTitle from "../components/home/NavTitle";
import NewsList from "../components/home/NewsList";
export default {
  components: {
    HeaderBar,
    NavTitle,
    NewsList
  },
  data() {
    return {
      arr: []
    };
  },
  methods: {},
  created() {
    this.axios({
      method: "get",
      url: "/homelist"
    }).then(ok => {
      // console.log(ok.data.shouye);
      this.arr = ok.data.shouye;
    });
  }
};
</script>

<style scoped>
.homeDiv {
  padding: 0 0.12rem;
  font-size: 0;
}
.loadImg {
  overflow: hidden;
  padding-top: 0.2rem;
}
.loadImg img {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 auto;
}
</style>