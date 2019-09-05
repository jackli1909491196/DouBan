<template>
  <div>
    <header-bar></header-bar>
    <div class="shopNav">
      <shop-nav-list :items="arr1" bigTitle="影院热映"></shop-nav-list>
      <shop-nav-list :items="arr2" bigTitle="免费在线观影"></shop-nav-list>
      <shop-nav-list :items="arr3" bigTitle="新片速递"></shop-nav-list>
    </div>
    <nav-list :arr="arrsf"></nav-list>
    <list-look></list-look>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../publics/HeaderBar";
import ShopNavList from "../publics/ShopNavList";
import NavList from '../publics/NavList';
import ListLook from '../publics/ListLook'
import Download from '../publics/Download';
export default {
  components: {
    HeaderBar,
    ShopNavList,
    NavList,
    ListLook,
    Download
  },
  data() {
    return {
      arrs: [],
      arr1: [],
      arr2: [],
      arr3: [],
      arrsf:[]
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/book"
    }).then(ok => {
      console.log(ok.data.books);
      this.arrs = ok.data.books;
      this.arrs.filter((v, i) => {
        if (i < 13) {
          this.arr1.push(this.arrs[i]);
        }
        return;
      }),
        this.arrs.filter((v, i) => {
          if (i >= 13 && i < 26) {
            this.arr2.push(this.arrs[i]);
          }
          return;
        }),
        this.arrs.filter((v, i) => {
          if (i >= 26 && i < 39) {
            this.arr3.push(this.arrs[i]);
          }
          return;
        });
    });
    this.axios({
      method: "get",
      url: "/findbook"
    }).then(ok => {
      console.log(ok.data.goodBook);
      this.arrsf = ok.data.goodBook;
    });
  }
};
</script>

<style scoped>
div .shopNav {
  padding-top: 0.48rem;
}
</style>