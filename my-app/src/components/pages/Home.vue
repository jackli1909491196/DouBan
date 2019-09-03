<template>
  <div class="homeDiv">
    <header-bar></header-bar>
    <nav-title></nav-title>
    <div v-for="(v,i) in arr" :key="i">
      <router-link to="/shoplist"> 
      <news-list :newsTitle="v.title" :newsCon="v.title" :newsImg="v.image" :newsType="v.category_name"></news-list>
      </router-link>
    </div>
  </div>
</template>
<script>
import HeaderBar from "../publics/HeaderBar";
import NavTitle from "../home/NavTitle";
import NewsList from "../home/NewsList";
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
}
</style>