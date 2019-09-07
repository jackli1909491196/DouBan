<template>
  <div>
    <header-bar></header-bar>
    <banner></banner>
    <please-login></please-login>
    <div class="radioListCon">
      <radio-con></radio-con>
      <radio-con></radio-con>
      <radio-con></radio-con>
      <radio-con></radio-con>
      <radio-con></radio-con>
      <radio-con></radio-con>
    </div>
    <download></download>
  </div>
</template>
<script>
import HeaderBar from "../components/publics/HeaderBar";
import Banner from "../components/publics/Banner";
import PleaseLogin from "../components/publics/PleaseLogin";
import Download from "../components/publics/Download";
import RadioCon from "../components/radio/RadioCon";
export default {
  components: {
    HeaderBar,
    Banner,
    PleaseLogin,
    RadioCon,
    Download
  }
};
</script>

<style scoped>
div{
  background-color: #ffffff;
}
.radioListCon {
  border-top: 0.01rem solid #d8d8d8;
}
</style>