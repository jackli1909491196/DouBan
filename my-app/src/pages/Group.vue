<template>
  <div>
    <header-bar></header-bar>
    <div class="pleaseLogin">
      <please-login></please-login>
    </div>
    <div class="groupCon">
      <group-list :items="arr1" title="租房找室友" bigTitle="更多相关小组"></group-list>
      <group-list :items="arr2" title="来聊五块钱" bigTitle="来聊五块钱"></group-list>
      <group-list :items="arr3" title="买买买" bigTitle="更多相关小组"></group-list>
    </div>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../components/publics/HeaderBar";
import PleaseLogin from "../components/publics/PleaseLogin";
import GroupList from "../components/group/GroupList";
import Download from "../components/publics/Download";
export default {
  components: {
    HeaderBar,
    PleaseLogin,
    GroupList,
    Download
  },
  data() {
    return {
      arr1: [],
      arr2: [],
      arr3: [],
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "/group"
    }).then(ok => {
      console.log(ok.data.xiaozua);
      this.arr1=ok.data.xiaozua;
      console.log(ok.data.xiaozub);
      this.arr2=ok.data.xiaozub;
      console.log(ok.data.xiaozuc);
      this.arr3=ok.data.xiaozuc;
    });
  }
};
</script>
<style scoped>
.pleaseLogin {
  padding-top: 0.48rem;
}
.groupCon {
  border-top: 0.01rem solid #d8d8d8;
}
</style>