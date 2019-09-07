<template>
  <div>
    <header-bar></header-bar>
    <banner></banner>
    <div class="navList"><nav-list :arr="arrsf"></nav-list></div>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../components/publics/HeaderBar";
import Banner from '../components/publics/Banner'
import NavList from "../components/publics/NavList";
import Download from "../components/publics/Download";
export default {
  components: {
    HeaderBar,
    Banner,
    NavList,
    Download
  },
  data() {
    return {
      arrsf: []
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/findmovie"
    }).then(ok => {
      console.log(ok.data.faxianhaodianying);
      this.arrsf = ok.data.faxianhaodianying;
    });
  }
};
</script>

<style scoped>
.navList{
    padding-top: 0.2rem;
}
</style>