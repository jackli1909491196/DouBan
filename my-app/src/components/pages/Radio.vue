<template>
  <div>
    <header-bar></header-bar>
    <banner></banner>
    <please-login></please-login>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../publics/HeaderBar";
import Banner from '../publics/Banner';
import PleaseLogin from '../publics/PleaseLogin';
import Download from '../publics/Download'
export default {
  components:{
   HeaderBar,
   Banner,
   PleaseLogin,
   Download
  }
};
</script>

<style scoped>
div h1{
  padding-top: 0.48rem;
  font-size: 0.4rem;
}
</style>