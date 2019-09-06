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
import HeaderBar from "../publics/HeaderBar";
import Banner from "../publics/Banner";
import PleaseLogin from "../publics/PleaseLogin";
import Download from "../publics/Download";
import RadioCon from "../radio/RadioCon";
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